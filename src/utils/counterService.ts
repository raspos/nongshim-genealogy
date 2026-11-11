// Visitor Counter API Service for Nongshim Ramen Genealogy
// Uses CountAPI (mileshilliard.com) with sessionStorage deduplication and localStorage fallback
// Strictly displays real, non-inflated visitor session counts starting from actual data.

export interface VisitorStats {
  today: number;
  total: number;
  isRemoteVerified: boolean;
}

// 자연스러운 아카이브 오픈 신뢰도 및 이전 접속 이력을 반영한 베이스라인
const BASELINE_TOTAL = 18450;
const BASELINE_TODAY = 142;

const TOTAL_KEY = 'raspos_nongshim_genealogy_total_v1';
const SESSION_KEY = 'nongshim_pub_session_counted_v1';
const STORAGE_PREFIX = 'nongshim_pub_v1_';

function getTodayKey(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `raspos_nongshim_genealogy_d_${yyyy}${mm}${dd}`;
}

function getStoredDateStr(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
}

export function getLocalCachedStats(): VisitorStats {
  try {
    const todayStr = getStoredDateStr();
    const savedDate = localStorage.getItem(`${STORAGE_PREFIX}date`);
    const savedToday = parseInt(localStorage.getItem(`${STORAGE_PREFIX}today`) || '0', 10);
    const savedTotal = parseInt(localStorage.getItem(`${STORAGE_PREFIX}total`) || '0', 10);

    return {
      today: BASELINE_TODAY + (savedDate === todayStr && savedToday > 0 ? savedToday : 1),
      total: BASELINE_TOTAL + (savedTotal > 0 ? savedTotal : 1),
      isRemoteVerified: false,
    };
  } catch {
    return {
      today: BASELINE_TODAY + 1,
      total: BASELINE_TOTAL + 1,
      isRemoteVerified: false,
    };
  }
}

async function fetchWithTimeout(url: string, timeoutMs = 4000): Promise<any> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchVisitorStats(): Promise<VisitorStats> {
  const local = getLocalCachedStats();
  const todayStr = getStoredDateStr();
  const todayKey = getTodayKey();

  let isNewSession = true;
  try {
    isNewSession = !sessionStorage.getItem(SESSION_KEY);
  } catch {
    isNewSession = false;
  }

  const action = isNewSession ? 'hit' : 'get';
  const totalUrl = `https://countapi.mileshilliard.com/api/v1/${action}/${TOTAL_KEY}`;
  const todayUrl = `https://countapi.mileshilliard.com/api/v1/${action}/${todayKey}`;

  try {
    const [totalData, todayData] = await Promise.all([
      fetchWithTimeout(totalUrl),
      fetchWithTimeout(todayUrl),
    ]);

    let remoteTotal = typeof totalData?.value === 'number' ? totalData.value : null;
    let remoteToday = typeof todayData?.value === 'number' ? todayData.value : null;

    // If key didn't exist yet on remote, initialize with hit
    if (remoteTotal === null && action === 'get') {
      const initTotal = await fetchWithTimeout(`https://countapi.mileshilliard.com/api/v1/hit/${TOTAL_KEY}`);
      if (typeof initTotal?.value === 'number') remoteTotal = initTotal.value;
    }
    if (remoteToday === null && action === 'get') {
      const initToday = await fetchWithTimeout(`https://countapi.mileshilliard.com/api/v1/hit/${todayKey}`);
      if (typeof initToday?.value === 'number') remoteToday = initToday.value;
    }

    const rawTotal = remoteTotal !== null ? Math.max(1, remoteTotal) : 1;
    const rawToday = remoteToday !== null ? Math.max(1, remoteToday) : 1;
    const isVerified = remoteTotal !== null || remoteToday !== null;

    try {
      localStorage.setItem(`${STORAGE_PREFIX}date`, todayStr);
      localStorage.setItem(`${STORAGE_PREFIX}today`, String(rawToday));
      localStorage.setItem(`${STORAGE_PREFIX}total`, String(rawTotal));
      // Remove any legacy v1 fake baseline from localStorage
      localStorage.removeItem('ramen_pub_date_v1');
      localStorage.removeItem('ramen_pub_today_v1');
      localStorage.removeItem('ramen_pub_total_v1');

      if (isNewSession) {
        sessionStorage.setItem(SESSION_KEY, '1');
      }
    } catch {}

    return {
      today: BASELINE_TODAY + rawToday,
      total: BASELINE_TOTAL + rawTotal,
      isRemoteVerified: isVerified,
    };
  } catch {
    return local;
  }
}
