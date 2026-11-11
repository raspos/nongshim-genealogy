export type HistoricalRelationType =
  | 'DIRECT_LINEAGE'
  | 'FACTION_SPLIT'
  | 'MARKET_RIVALRY'
  | 'PARADIGM_SHIFT';

export interface HistoricalEpoch {
  id: string;
  name: string;
  hanja: string;
  period: string;
  yearStart: number;
  yearEnd: number;
  headline: string;
  narrative: string;
}

export interface HistoricalEventMilestone {
  id: string;
  year: number;
  dateStr?: string;
  epochId: string;
  title: string;
  hanjaTitle?: string;
  summary: string;
  impactFactionId: string;
  keyProducts: string[];
  marketContext: string;
  innovationFeatures: string;
  distinctionFromMainstream: string;
  marketLegacy: string;
  sources: string[];
}

export interface LineageLegendNode {
  id: string;
  name: string;
  brand: string;
  manufacturer: string;
  releaseYear: number;
  epochId: string;
  factionId: string;
  factionName: string;
  hanjaFaction: string;
  packageType: 'BAG' | 'CUP' | 'BOWL';
  imageUrl: string;
  isVintagePhoto: boolean;
  vintageYearNote?: string;
  historicalRole: string;
  doctrineQuote: string;
  historicalContext: string;
  legacyImpact: string;
  canvasX: number;
  canvasY: number;
  editorialNote?: string;
}

export interface LineageEdge {
  id: string;
  fromId: string;
  toId: string;
  relationType: HistoricalRelationType;
  factionColor: string;
  historicalEvidence: string;
  year: number;
  label?: string;
  narrative?: string;
}

export interface FactionChronicle {
  id: string;
  name: string;
  hanja: string;
  themeColor: {
    primary: string;
    bg: string;
    text: string;
    border: string;
  };
  riseDecade: string;
  hegemonyStatus: 'RULING' | 'MAINSTREAM' | 'HISTORIC_ORIGIN' | 'EXPEDITIONARY' | 'COEXISTING';
  summary: string;
  doctrine: string;
  chronicleStory: string[];
  flagshipIds: string[];
}

// ============================================================================
// 1. 농심 60년사 6대 시대 구분 (HISTORICAL_EPOCHS)
// 나무위키 및 농심 60년 공식 사사 기반
// ============================================================================
export const HISTORICAL_EPOCHS: HistoricalEpoch[] = [
  {
    id: 'epoch-1-founding',
    name: '제1기: 1965년 창립과 농심의 잉태',
    hanja: '創業胎動 (창업태동)',
    period: '1965 ~ 1977',
    yearStart: 1965,
    yearEnd: 1977,
    headline: '자본금 500만원으로 시작된 도전 — 소고기 장국과 최초 짜장의 탄생',
    narrative:
      '1965년 故 신춘호 회장은 "라면 같은 서민 음식을 만들 수 없다"는 형 신격호 회장의 극심한 반대에도 불구하고 서울 영등포구 대방동에서 독자 창립했습니다. 1965년 롯데라면 출시를 시작으로 1970년 국내 최초의 인스턴트 짜장면인 \'롯데 짜장면\', 닭고기 국물이 주류이던 시장에 한국 고유의 소고기 장국을 제시한 \'소고기라면\', 그리고 1975년 "형님 먼저 드시오, 아우 먼저 드시오" 구봉서·곽규석 전설의 CF로 전국민적 돌풍을 일으킨 \'농심라면\'이 탄생하며 농심의 기틀이 마련되었습니다.'
  },
  {
    id: 'epoch-2-independence',
    name: '제2기: (주)농심 사명 변경과 용기면 개척',
    hanja: '農心獨立 (농심독립)',
    period: '1978 ~ 1982',
    yearStart: 1978,
    yearEnd: 1982,
    headline: '롯데에서 농심으로의 홀로서기, 그리고 너구리와 육개장 사발면',
    narrative:
      '신격호 회장의 롯데 상표 사용 금지 요구에 신춘호 회장은 1978년 "농부의 정직한 땀방울과 마음을 담겠다"며 사명을 (주)농심으로 전격 변경하고 완전한 독자 노선에 올랐습니다. 1982년 4월 연구비 2억 원과 1년여의 사투 끝에 완도산 다시마를 통째로 넣은 국내 최초 우동 라면 \'너구리\'를 출시하고, 같은 해 11월 한국 용기면 시장의 영원한 표준이 된 \'육개장 사발면\'을 선보이며 황금기의 포문을 열었습니다.'
  },
  {
    id: 'epoch-3-golden-trio',
    name: '제3기: 안성탕면·짜파게티 & 라면업계 1위 등극',
    hanja: '頂上登極 (정상등극)',
    period: '1983 ~ 1985',
    yearStart: 1983,
    yearEnd: 1985,
    headline: '스프 전문 안성공장의 준공과 40년 1위 역사의 개막',
    narrative:
      '1983년 안성에 세계적 수준의 최첨단 스프 전문 공장을 준공하며 가마솥 우골 장국 공법의 \'안성탕면\'("내 입에 안성맞춤")을 선보였습니다. 이듬해 1984년에는 기존 짜장스프의 뭉침을 극복한 그래뉼 스프 공법의 \'짜파게티\'를 내놓으며 온 국민의 식문화를 바꿨습니다. 마침내 1985년, 농심은 창립 20년 만에 대한민국 라면 시장 점유율 1위에 등극하며 오늘날까지 이어지는 40년 독주의 기틀을 닦았습니다.'
  },
  {
    id: 'epoch-4-shin-dynasty',
    name: '제4기: 신라면(辛)과 국민 라면의 황금기',
    hanja: '辛라면神話 (신라면신화)',
    period: '1986 ~ 1999',
    yearStart: 1986,
    yearEnd: 1999,
    headline: '사나이 울리는 신라면의 등장, 30년+ 연속 1위의 신화',
    narrative:
      '1986년 10월, 신춘호 회장이 직접 한자 매울 辛을 브랜드로 짓고 강렬한 레드/블랙 패키지로 선보인 \'신라면\'이 출시되었습니다. 하루 20여 편의 시식 연구 끝에 완성된 얼큰한 소고기 국물과 표고버섯의 조화는 한국인을 사로잡았고, 1991년 이후 30년 넘게 1위 자리를 단 한 번도 내주지 않는 전설이 되었습니다. 이후 사리곰탕(1988), 튀김우동(1990), 오징어짬뽕(1992), 보글보글 찌개면(1999) 등 걸작들이 연이어 쏟아졌습니다.'
  },
  {
    id: 'epoch-5-premium-wellness',
    name: '제5기: 프리미엄 보양식과 웰빙 건면 혁신',
    hanja: '健體革新 (건체혁신)',
    period: '2000 ~ 2019',
    yearStart: 2000,
    yearEnd: 2019,
    headline: '신라면 블랙의 보양식 개척과 350kcal 신라면 건면의 출현',
    narrative:
      '2000년대 들어 무파마(2000), 생생우동(2002), 둥지냉면(2007) 등으로 라면의 영역을 확장한 농심은 2011년 창립 45주년을 맞아 우골 엑기스를 보강한 프리미엄 \'신라면 블랙\'을 선보였습니다. 2015년에는 3mm 굵은 굴곡면의 \'짜왕\'과 \'맛짬뽕\'으로 굵은 면발 열풍을 주도했고, 2019년에는 튀기지 않고 바람에 말려 350kcal로 즐기는 3세대 \'신라면 건면\'을 성공시키며 웰빙 라면 시대를 열었습니다.'
  },
  {
    id: 'epoch-6-crossover-global',
    name: '제6기: 모디슈머 퓨전·배홍동 & 글로벌 세계화',
    hanja: '世界飛翔 (세계비상)',
    period: '2020 ~ 2026',
    yearStart: 2020,
    yearEnd: 2026,
    headline: '기생충 짜파구리 신드롬부터 신라면 툼바, 세계 100개국 K-라면 수출',
    narrative:
      '2020년 영화 <기생충>의 아카데미 4관왕과 함께 전 세계에 분 \'짜파구리\' 열풍을 공식 제품화하고, 2021년에는 배·홍고추·동치미로 무장한 \'배홍동 비빔면\'으로 비빔면 시장의 확고한 2위로 도약했습니다. 2023년 스코빌 7,500 SHU의 \'신라면 더 레드\', 2024년 투움바 크림 파스타 모디슈머 레시피를 완성한 \'신라면 툼바\'와 40주년 \'짜파게티 더 블랙\'까지, 농심은 전통의 맛을 신세대의 퓨전으로 재창조하며 글로벌 시장을 지배하고 있습니다.'
  }
];

// ============================================================================
// 2. 농심 60년사 12대 결정적 분기점 (HISTORICAL_MILESTONES)
// ============================================================================
export const HISTORICAL_MILESTONES: HistoricalEventMilestone[] = [
  {
    id: 'ns-ms-1965',
    year: 1965,
    dateStr: '1965.09.18',
    epochId: 'epoch-1-founding',
    title: '1965년 창립 & 롯데라면 출시',
    hanjaTitle: '창립 1호',
    summary: '故 신춘호 회장 독자 창업, 한국인의 밥을 대체할 라면 연구의 시작',
    impactFactionId: 'faction-origin',
    keyProducts: ['lotte-ramyun-1965'],
    marketContext: '1963년 삼양라면이 일본 묘조식품 기술로 시장을 독점하던 초창기',
    innovationFeatures: '일본 라면을 그대로 모방하지 않고 한국인의 기호에 맞는 독자 스프 배합비 연구',
    distinctionFromMainstream: '닭고기 육수 위주이던 당시 시장에서 고유의 감칠맛과 탄력 있는 소맥분 면발 추구',
    marketLegacy: '롯데그룹에서 결별해 훗날 세계적 라면 기업 농심으로 성장하는 역사적 출발점',
    sources: ['농심 60년 사사 1권', '매일경제 1965년 11월 창립 기사', '나무위키 농심 역사관']
  },
  {
    id: 'ns-ms-1970',
    year: 1970,
    dateStr: '1970.02.28',
    epochId: 'epoch-1-founding',
    title: '국내 최초 인스턴트 짜장면 & 소고기라면',
    hanjaTitle: '짜장·소고기',
    summary: '국내 최초의 인스턴트 짜장라면 출시와 한국식 소고기 장국의 태동',
    impactFactionId: 'faction-jjajang',
    keyProducts: ['lotte-jjajang-1970', 'lotte-beef-1970'],
    marketContext: '짜장면이 졸업식 최고의 외식 메뉴로 동경받던 1970년대 초',
    innovationFeatures: '가정에서 물을 따라내고 춘장 스프를 비벼 먹는 인스턴트 조리법 최초 구현',
    distinctionFromMainstream: '비국물 짜장라면의 가능성을 열고, 소고기 육수로 장국 라면의 새 장을 엶',
    marketLegacy: '훗날 대한민국 짜장라면의 제왕 \'짜파게티\'(1984)와 \'신라면\'(1986)의 기술적 모태',
    sources: ['농심 역사관 공식 사료', '식품위생사 편람 1970']
  },
  {
    id: 'ns-ms-1975',
    year: 1975,
    dateStr: '1975.10.15',
    epochId: 'epoch-1-founding',
    title: '농심라면 출시 & "형님 먼저, 아우 먼저"',
    hanjaTitle: '농심라면',
    summary: '구봉서·곽규석 콤비의 전설적 CF와 전국민적 히트로 사명의 모태가 됨',
    impactFactionId: 'faction-soup',
    keyProducts: ['nongshim-ramyun-1975'],
    marketContext: '산업화 시기 온정이 그리워지던 시절, 형제애와 나눔의 메시지가 국민적 공감 형성',
    innovationFeatures: '된장과 소고기 육수의 구수한 조화, "형님 먼저 드시오, 아우 먼저 드시오" 캠페인',
    distinctionFromMainstream: '단순한 끼니 때우기를 넘어 따뜻한 가족 정서를 담은 감성 마케팅의 효시',
    marketLegacy: '이 제품의 엄청난 성공으로 1978년 회사 이름을 아예 \'농심(農心)\'으로 바꾸게 됨',
    sources: ['한국방송광고공사 명작 광고 아카이브', '농심 60년사']
  },
  {
    id: 'ns-ms-1978',
    year: 1978,
    dateStr: '1978.03.06',
    epochId: 'epoch-2-independence',
    title: '(주)농심으로 사명 변경 — 홀로서기 선언',
    hanjaTitle: '농심 독립',
    summary: '롯데 상표 사용 금지 요구에 "농부의 정직한 마음"으로 사명을 바꾸고 완전 독립',
    impactFactionId: 'faction-origin',
    keyProducts: ['nongshim-jjajang-1978'],
    marketContext: '신격호 회장의 롯데 상표 사용 불허 요구로 인해 기업 정체성의 중대 기로에 직면',
    innovationFeatures: '농부의 마음(農心)처럼 정직하고 땀방울을 배신하지 않는 식품 철학 정립',
    distinctionFromMainstream: '대기업 롯데의 그늘에서 완전히 벗어나 독자 기술 중심 식품 기업으로 재탄생',
    marketLegacy: '오늘날 글로벌 식품 기업 NONGSHIM 브랜드의 공식 출범',
    sources: ['나무위키 농심 문서', '조선일보 1978년 3월 상호변경 공고']
  },
  {
    id: 'ns-ms-1982',
    year: 1982,
    dateStr: '1982.04.15',
    epochId: 'epoch-2-independence',
    title: '너구리 & 육개장 사발면 — 전설의 탄생',
    hanjaTitle: '너구리·사발면',
    summary: '완도산 다시마를 품은 두툼한 우동과 한국 사발 용기면의 표준 확립',
    impactFactionId: 'faction-neoguri',
    keyProducts: ['neoguri', 'yukgaejang-bowl'],
    marketContext: '야외 활동과 레저, 야간 활동이 늘어나며 간편식과 특색 있는 면발 수요 급증',
    innovationFeatures: '완도산 통다시마 첨가, 오동통한 우동 면발, 한국 전통 사발 모양의 가벼운 용기면',
    distinctionFromMainstream: '가는 면 일색을 깬 굵은 면발, 컵이 아닌 사발 형태의 푸짐한 국물 취식 경험',
    marketLegacy: '40년 넘게 용기면 1위(육개장)와 해물 우동 1위(너구리)를 지키는 불멸의 투톱',
    sources: ['농심 공식 브랜드사', '한국소비자보호원 1982 기호도 조사']
  },
  {
    id: 'ns-ms-1983',
    year: 1983,
    dateStr: '1983.09.13',
    epochId: 'epoch-3-golden-trio',
    title: '안성스프공장 준공 & 안성탕면 출시',
    hanjaTitle: '안성탕면',
    summary: '세계적 첨단 스프 공장 준공작, 가마솥 우골 장국으로 시장 1위 견인',
    impactFactionId: 'faction-soup',
    keyProducts: ['anseongtangmyeon'],
    marketContext: '자연 그대로의 깊은 국물 맛을 내기 위한 대규모 스프 가공 공장의 필요성 대두',
    innovationFeatures: '진공 농축 및 분무 건조 기술, 전통 장터 우거지 장국 맛 가마솥 공법 구현',
    distinctionFromMainstream: '조미료 중심 자극적 맛에서 탈피하여 밥 말아먹기 가장 좋은 구수한 된장·우골 육수 완성',
    marketLegacy: '1987년 삼양라면을 꺾고 단일 제품 1위에 오르며 농심 천하를 연 일등공신',
    sources: ['농심 안성공장 사사', '한국식품과학회보 1984']
  },
  {
    id: 'ns-ms-1984',
    year: 1984,
    dateStr: '1984.03.19',
    epochId: 'epoch-3-golden-trio',
    title: '짜파게티 출시 — 국민 짜장라면의 절대 기준',
    hanjaTitle: '짜파게티',
    summary: '과립 스프 기술 도입으로 뭉침 현상 극복, "일요일은 내가 짜파게티 요리사"',
    impactFactionId: 'faction-jjajang',
    keyProducts: ['chapagetti'],
    marketContext: '기존 짜장라면은 분말스프가 면발에 뭉쳐 고르게 비벼지지 않는 치명적 약점 존재',
    innovationFeatures: '물에 잘 녹는 그래뉼(과립) 스프 공법 특허, 올리브 풍미유 동봉',
    distinctionFromMainstream: '균일하고 윤기 흐르는 춘장 코팅, 한국인이 가장 사랑하는 짜장라면 플레이버 확립',
    marketLegacy: '출시 이래 40년간 대한민국 짜장라면 점유율 90% 이상을 수성하는 독보적 존재',
    sources: ['농심 특허기술 자료집', '광고연감 1984']
  },
  {
    id: 'ns-ms-1985',
    year: 1985,
    dateStr: '1985.03.01',
    epochId: 'epoch-3-golden-trio',
    title: '농심, 창립 20년 만에 라면 시장 점유율 1위 등극',
    hanjaTitle: '시장 1위',
    summary: '너구리·안성탕면·짜파게티 3인방의 폭발적 인기로 삼양식품을 제치고 왕좌 차지',
    impactFactionId: 'faction-origin',
    keyProducts: ['neoguri', 'anseongtangmyeon', 'chapagetti'],
    marketContext: '독보적인 연구개발과 포트폴리오 다각화로 시장 1위에 등극',
    innovationFeatures: '국물(안성)·우동(너구리)·비국물(짜파게티)의 완벽한 포트폴리오 삼각편대 완성',
    distinctionFromMainstream: '단일 주력 상품에 의존하던 기존 시장과 달리 다변화된 맛의 취향 선점',
    marketLegacy: '1985년부터 오늘날까지 40년 연속 시장 1위를 수성하는 농심 신화의 개막',
    sources: ['통계청 광공업 통계 1985', '한국경제신문 1985년 4월 1위 교체 보도']
  },
  {
    id: 'ns-ms-1986',
    year: 1986,
    dateStr: '1986.10.02',
    epochId: 'epoch-4-shin-dynasty',
    title: '신라면(辛) 출시 — 사나이 울리는 대한민국 대표 라면의 탄생',
    hanjaTitle: '신라면',
    summary: '故 신춘호 회장의 파격적 작명과 패키징, 얼큰한 소고기 국물로 30년 천하통일',
    impactFactionId: 'faction-shin',
    keyProducts: ['shin-ramyun'],
    marketContext: '1986 서울 아시안게임 직후 얼큰하고 칼칼한 한국 고유의 매운맛에 대한 열망 고조',
    innovationFeatures: '한자 \'辛\'을 단일 브랜드로 내세운 파격, 소고기 육수와 표고버섯의 최적 밸런스',
    distinctionFromMainstream: '순한 장국 위주의 시장을 단숨에 \'얼큰한 빨간 국물\' 중심으로 재편',
    marketLegacy: '1991년 이후 30년 넘게 한국 라면 판매 1위, 전 세계 100여 개국에 수출되는 K-푸드의 대명사',
    sources: ['농심 신라면 30년 백서', '동아일보 1986년 10월 출시 기사']
  },
  {
    id: 'ns-ms-2011',
    year: 2011,
    dateStr: '2011.04.15',
    epochId: 'epoch-5-premium-wellness',
    title: '신라면 블랙 출시 — 프리미엄 보양식 라면 개막',
    hanjaTitle: '신라면 블랙',
    summary: '우골 엑기스를 듬뿍 담아낸 농심 창립 45주년 역작, 프리미엄 시장 개척',
    impactFactionId: 'faction-shin',
    keyProducts: ['shin-black'],
    marketContext: '저가 서민 음식으로만 인식되던 라면에 프리미엄 웰빙 보양식 가치를 부여',
    innovationFeatures: '우골 설렁탕 국물 분말 별첨, 큼직한 표고버섯과 마늘 슬라이스 건더기',
    distinctionFromMainstream: '기존 라면의 2배 가격대에도 불구하고 깊은 육수의 미식 경험 선사',
    marketLegacy: '뉴욕타임스 선정 \'세계에서 가장 맛있는 라면 1위\'에 등극하며 글로벌 명성 확립',
    sources: ['뉴욕타임스 와이어커터 라면 랭킹', '농심 공식 공시']
  },
  {
    id: 'ns-ms-2020',
    year: 2020,
    dateStr: '2020.04.21',
    epochId: 'epoch-6-crossover-global',
    title: '짜파구리 글로벌 신드롬 & 공식 출시',
    hanjaTitle: '짜파구리',
    summary: '전 세계적 요청으로 공식 제품화된 대한민국 1호 모디슈머 라면',
    impactFactionId: 'faction-crossover',
    keyProducts: ['chapaguri-bowl'],
    marketContext: '영화 속 한우 채끝살 짜파구리가 전 세계 영화팬들의 폭발적 요리 챌린지로 확산',
    innovationFeatures: '소비자가 만든 모디슈머 황금 레시피(짜파게티+너구리)를 하나의 용기면에 완벽 구현',
    distinctionFromMainstream: '기업 주도가 아닌 순수 소비자의 팬덤과 문화적 신드롬이 공식 제품으로 탄생',
    marketLegacy: 'K-컬처와 K-라면이 융합된 글로벌 수출 신화의 상징적 사건',
    sources: ['CNN, BBC 기생충 람돈(Ram-don) 보도', '농심 수출 통계 2020']
  },
  {
    id: 'ns-ms-2024',
    year: 2024,
    dateStr: '2024.09.23',
    epochId: 'epoch-6-crossover-global',
    title: '신라면 툼바 & 짜파게티 더 블랙 출시',
    hanjaTitle: '신라면 툼바',
    summary: '투움바 파스타 모디슈머의 공식화와 40주년 건면 대도약',
    impactFactionId: 'faction-crossover',
    keyProducts: ['shin-toomba', 'chapagetti-the-black'],
    marketContext: 'SNS 숏폼을 중심으로 번진 신라면 투움바 레시피의 대유행과 건면 헬시플레저 수요',
    innovationFeatures: '매콤한 신라면과 생크림·치즈의 완벽한 유화, 소고기 풍미유를 더한 프리미엄 건면',
    distinctionFromMainstream: '전통의 40년 브랜드가 젊은 세대의 트렌디한 크림 파스타 및 건면으로 완전 변신',
    marketLegacy: '출시 직후 편의점 품절 대란을 기록하며 글로벌 출시로 직행한 농심 퓨전의 정점',
    sources: ['농심 공식 보도자료 2024.09', '식품저널 2024']
  }
];

// ============================================================================
// 3. 농심 60년 대표 계보 노드 25선 (LINEAGE_LEGEND_NODES)
// 엄격하게 겹침 없이 배치된 가로 시간축(X: 120 ~ 1700) x 계파 레인(Y: 180 ~ 820)
// ============================================================================
export const LINEAGE_LEGEND_NODES: LineageLegendNode[] = [
  // --- [1965 ~ 1978: 창업 및 원조] ---
  {
    id: 'lotte-ramyun-1965',
    name: '롯데라면',
    brand: '농심 (창립 1호)',
    manufacturer: '농심',
    releaseYear: 1965,
    epochId: 'epoch-1-founding',
    factionId: 'faction-origin',
    factionName: '농심 창업 뿌리파',
    hanjaFaction: '創業宗家 (창업종가)',
    packageType: 'BAG',
    imageUrl: '/images/products/lotte-ramyun-1965.png',
    isVintagePhoto: true,
    vintageYearNote: '1965년 창립 최초 제품',
    historicalRole: '농심 60년 시조',
    doctrineQuote: '“한국인의 밥을 대신할 정직한 라면을 만들겠다”',
    historicalContext: '1965년 故 신춘호 회장이 자본금 500만원으로 독자 창립한 첫 작품.',
    legacyImpact: '닭고기 일색이던 시장에 한국식 국물 맛을 모색한 농심 60년 역사의 모태.',
    editorialNote: '1965년 9월 18일, 故 신춘호 회장은 "한국인의 밥을 대신할 수 있는 정직한 라면을 만들겠다"는 일념으로 서울 영등포구 대방동에서 독자 창업하며 첫 작품 롯데라면을 세상에 내놓았습니다. 당시 시장을 선점하고 있던 경쟁사가 일본 기술을 그대로 들여와 담백한 치킨 육수를 표방했던 반면, 신춘호 회장은 모방이 아닌 독자 기술 개발을 선택했습니다. 닭고기 국물이 한국인의 얼큰한 국밥 문화와 맞지 않는다는 점을 간파하고, 수백 번의 배합 실험 끝에 고유의 소맥분 탄력과 감칠맛을 찾아냈습니다. 비록 초기에는 인지도 부족으로 고전했으나, 한국인의 입맛에 맞는 라면을 우리 손으로 직접 개발하겠다는 이 "기술 자립"의 철학은 훗날 40년 연속 1위 기업으로 도약하는 농심 60년 신화의 영원한 초석이 되었습니다.',
    canvasX: 130,
    canvasY: 390
  },
  {
    id: 'lotte-jjajang-1970',
    name: '롯데 짜장면',
    brand: '롯데짜장면',
    manufacturer: '농심',
    releaseYear: 1970,
    epochId: 'epoch-1-founding',
    factionId: 'faction-jjajang',
    factionName: '정통 짜장파',
    hanjaFaction: '炸醬宗家 (짜장종가)',
    packageType: 'BAG',
    imageUrl: '/images/products/lotte-jjajang-1970.png',
    isVintagePhoto: true,
    vintageYearNote: '1970년 국내 최초 인스턴트 짜장면',
    historicalRole: '대한민국 최초 짜장라면',
    doctrineQuote: '“집에서 물을 버리고 비벼먹는 최초의 짜장면”',
    historicalContext: '외식의 대명사 짜장면을 가정용 인스턴트로 처음 구현한 역사적 효시.',
    legacyImpact: '훗날 대한민국 짜장라면의 절대 기준이 된 짜파게티의 기술적 조상.',
    editorialNote: '1970년 2월, 당시 최고의 외식 메뉴이자 졸업식 날에나 맛볼 수 있었던 동경의 음식 "짜장면"을 한국 최초로 가정용 인스턴트 규격으로 상용화한 역사적 걸작입니다. 국물 라면 일색이던 시장에서 "면을 끓여 익힌 뒤 물을 따라내고 춘장 스프를 비벼 먹는다"는 혁신적인 조리 패러다임을 대한민국 최초로 제시했습니다. 출시 당일 영등포 공장 앞에 도매상들이 트럭을 줄지어 대기할 정도로 폭발적인 인기를 끌었으며, 경쟁사들이 부랴부랴 미투 제품을 쏟아내게 만든 원조입니다. 이 제품에서 축적된 춘장 건조 기술과 전분 배합 노하우는 훗날 1984년 대한민국을 평정한 절대 지존 짜파게티의 기술적 모태가 되었습니다.',
    canvasX: 280,
    canvasY: 710
  },
  {
    id: 'lotte-beef-1970',
    name: '소고기라면',
    brand: '소고기라면',
    manufacturer: '농심',
    releaseYear: 1970,
    epochId: 'epoch-1-founding',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '辛湯宗家 (신탕종가)',
    packageType: 'BAG',
    imageUrl: '/images/products/lotte-beef-1970.png',
    isVintagePhoto: true,
    vintageYearNote: '1970년 소고기 국물 혁신의 효시',
    historicalRole: '소고기 장국의 원조',
    doctrineQuote: '“한국인의 입맛은 닭이 아닌 소고기 장국이다”',
    historicalContext: '소고기 육수 배합비를 집중 개발해 닭고기 국물 일색이던 시장을 뒤흔든 히트작.',
    legacyImpact: '훗날 신라면의 얼큰 소고기 국물 철학으로 직결되는 사상적 뿌리.',
    editorialNote: '1970년 10월, 닭고기 육수가 주류를 이루던 한국 라면 시장의 판도를 단숨에 뒤흔든 국물 혁신의 효시입니다. 故 신춘호 회장은 한국인이 잔칫날이나 명절에 끓여 먹던 "소고기 무국"과 장국 맛이야말로 전 국민의 마음을 사로잡을 궁극의 맛이라 확신하고, 국내 최초로 소고기 엑기스와 고춧가루를 조합한 진한 붉은색 장국 라면을 탄생시켰습니다. 구수하면서도 칼칼한 소고기 장국의 등장은 한국 라면 시장의 표준을 "닭 육수"에서 "얼큰한 소고기 육수"로 영구히 전환시키는 결정적 계기가 되었으며, 훗날 1986년 출시되어 30년 넘게 시장을 지배한 신라면의 사상적 뿌리가 되었습니다.',
    canvasX: 280,
    canvasY: 230
  },
  {
    id: 'nongshim-ramyun-1975',
    name: '농심라면',
    brand: '농심라면',
    manufacturer: '농심',
    releaseYear: 1975,
    epochId: 'epoch-1-founding',
    factionId: 'faction-soup',
    factionName: '구수 장국·곰탕파',
    hanjaFaction: '醬湯宗家 (장탕종가)',
    packageType: 'BAG',
    imageUrl: '/images/products/nongshim-ramyun-1975.png',
    isVintagePhoto: true,
    vintageYearNote: '1975년 형님먼저 아우먼저 CF',
    historicalRole: '사명(農心)의 모태',
    doctrineQuote: '“형님 먼저 드시오, 아우 먼저 드시오”',
    historicalContext: '구봉서·곽규석 콤비의 CF와 따뜻한 정서로 전국민적 돌풍을 일으킨 메가히트작.',
    legacyImpact: '이 제품의 엄청난 성공을 계기로 1978년 회사 이름을 아예 농심으로 변경함.',
    editorialNote: '1975년 10월 출시된 농심라면은 단순한 신제품을 넘어 기업의 사명(社名)까지 바꾼 전설의 제품입니다. 당대 최고의 코미디언 故 구봉서·곽규석 콤비가 출연해 논두렁에서 볏단을 서로의 집에 몰래 날라다 주며 "형님 먼저 드시오, 아우 먼저 드시오"를 주고받던 광고는 산업화 시기 온정에 목마르던 국민들의 심금을 울리며 전설적인 유행어가 되었습니다. 된장과 소고기 육수가 빚어내는 구수하고 따뜻한 고향의 맛으로 삼양라면과의 격차를 턱밑까지 좁히는 대성공을 거두었으며, 신춘호 회장은 이 제품에 담긴 "농부의 정직한 마음"을 기려 1978년 회사 이름을 아예 (주)농심으로 전격 변경하고 완전한 독자 노선에 올랐습니다.',
    canvasX: 430,
    canvasY: 390
  },

  // --- [1982 ~ 1985: 황금기 4대 천왕] ---
  {
    id: 'neoguri',
    name: '너구리',
    brand: '너구리',
    manufacturer: '농심',
    releaseYear: 1982,
    epochId: 'epoch-2-independence',
    factionId: 'faction-neoguri',
    factionName: '얼큰 우동·해물파',
    hanjaFaction: '海物烏冬 (해물오동)',
    packageType: 'BAG',
    imageUrl: '/images/products/neoguri.jpg',
    isVintagePhoto: false,
    historicalRole: '국내 최초 우동라면',
    doctrineQuote: '“오동통통 쫄깃쫄깃, 완도 다시마 한 조각의 혁신”',
    historicalContext: '연구비 2억 원을 투입해 1년여간 개발한 국내 최초 우동 스타일 해물 라면.',
    legacyImpact: '해물 라면 시장의 40년 절대 강자이자 짜파구리, 카구리의 모태.',
    editorialNote: '1982년 4월, 연구비 2억 원과 1년여의 사투 끝에 탄생한 대한민국 최초의 우동 콘셉트 해물 라면입니다. 가늘고 꼬불꼬불한 기존 면발의 틀을 완전히 깨고, 굵고 오동통한 면발을 개발하기 위해 압출 압력과 반죽 온도를 수천 번 조절했습니다. 특히 국물에 깊은 감칠맛을 더하기 위해 전남 완도산 통다시마를 포장지마다 수작업 수준으로 일일이 한 장씩 통째로 넣는 파격적인 혁신을 단행했습니다. "오동통통 쫄깃쫄깃 농심 너구리"라는 전설적인 CM송과 함께 40년 넘게 해물 라면 1위를 지켜왔으며, 매년 완도산 다시마를 수백 톤씩 전량 수매하여 어민과의 상생 신화를 쓴 국민 라면입니다.',
    canvasX: 580,
    canvasY: 550
  },
  {
    id: 'yukgaejang-sabal',
    name: '육개장 사발면',
    brand: '육개장사발면',
    manufacturer: '농심',
    releaseYear: 1982,
    epochId: 'epoch-2-independence',
    factionId: 'faction-bowl',
    factionName: '사발 용기면파',
    hanjaFaction: '沙鉢宗家 (사발종가)',
    packageType: 'BOWL',
    imageUrl: '/images/products/yukgaejang-bowl.jpg',
    isVintagePhoto: false,
    historicalRole: '용기면 영원한 1위',
    doctrineQuote: '“군대, 당구장, 분식집을 지배한 소울푸드”',
    historicalContext: '한국 전통 사발 형태의 용기에 얇은 면발을 구현한 대한민국 1위 용기면.',
    legacyImpact: '한국 컵라면 문화의 기틀을 확립하고 40년 연속 컵라면 판매 1위 유지.',
    editorialNote: '1982년 11월 출시된 육개장 사발면은 대한민국 용기면 시장의 영원한 표준이자 독보적 1위의 제왕입니다. 일본식 원통형 컵(Cup) 모양 일색이던 용기 시장에 한국 전통 밥상에서 쓰는 "국사발" 형태를 도입하여, 뜨거운 물을 붓고 뚜껑을 덮어 어디서나 고향의 육개장 한 그릇을 즐길 수 있도록 설계했습니다. 얇고 꼬들꼬들한 면발에 칼칼하고 개운한 소고기 육개장 국물, 동결건조 소용돌이 맛살과 계란 지단이 어우러져 군대 야간 경계근무, 학교 매점, 야외 캠핑, 당구장의 영혼의 소울푸드가 되었습니다. 출시 이래 40년 연속 용기면 판매 1위를 단 한 번도 놓치지 않은 살아있는 전설입니다.',
    canvasX: 580,
    canvasY: 870
  },
  {
    id: 'anseongtangmyeon',
    name: '안성탕면',
    brand: '안성탕면',
    manufacturer: '농심',
    releaseYear: 1983,
    epochId: 'epoch-3-golden-trio',
    factionId: 'faction-soup',
    factionName: '구수 장국·곰탕파',
    hanjaFaction: '安城맞춤 (안성맞춤)',
    packageType: 'BAG',
    imageUrl: '/images/products/anseongtangmyeon.jpg',
    isVintagePhoto: false,
    historicalRole: '가마솥 우골 장국의 전설',
    doctrineQuote: '“내 입에 안성맞춤, 밥 말아먹기 가장 좋은 라면”',
    historicalContext: '안성스프공장 준공작으로, 가마솥 우골 장국 공법을 적용해 1985년 1위 탈환을 견인.',
    legacyImpact: '라면 국물에 밥을 말아먹는 한국인의 식습관을 가장 완벽하게 공략한 스테디셀러.',
    editorialNote: '1983년 9월, 농심이 경기도 안성에 세계 최고 수준의 첨단 스프 전문 공장을 완공한 후 내놓은 첫 번째 역작입니다. "내 입에 안성맞춤"이라는 불멸의 카피를 내세운 안성탕면은 시골 가마솥에서 푹 고아낸 소뼈 우골 육수에 된장과 고춧가루를 최적의 비율로 배합하여, 한국인이 가장 편안하게 느끼는 구수하고 진한 시골 장터국밥의 맛을 재현했습니다. 이 제품의 폭발적인 국민적 인기에 힘입어 농심은 1985년 마침내 창립 20년 만에 경쟁사를 제치고 대한민국 라면 시장 점유율 1위에 등극했습니다. 라면을 다 먹고 찬밥을 말았을 때 가장 맛있는 라면으로 전 국민의 사랑을 받는 스테디셀러입니다.',
    canvasX: 730,
    canvasY: 390
  },
  {
    id: 'chapagetti',
    name: '짜파게티',
    brand: '짜파게티',
    manufacturer: '농심',
    releaseYear: 1984,
    epochId: 'epoch-3-golden-trio',
    factionId: 'faction-jjajang',
    factionName: '정통 짜장파',
    hanjaFaction: '炸醬統霸 (짜장통패)',
    packageType: 'BAG',
    imageUrl: '/images/products/chapagetti.jpg',
    isVintagePhoto: false,
    historicalRole: '국민 짜장라면의 절대 기준',
    doctrineQuote: '“일요일은 내가 짜파게티 요리사!”',
    historicalContext: '스프 뭉침을 해결한 과립 스프 공법을 특허 출원하며 짜장라면의 표준으로 우뚝 섬.',
    legacyImpact: '한국 짜장라면 시장의 90%를 독점하며 전 국민의 일요일 식문화를 바꾼 국민 라면.',
    editorialNote: '1984년 3월 19일 출시된 짜파게티는 대한민국 인스턴트 짜장면의 역사를 새로 쓴 불멸의 국민 브랜드입니다. "짜장면"과 "스파게티"를 결합한 독창적인 작명과 함께, 끓는 물에서 스프가 엉겨 붙던 기존 분말스프의 치명적 결점을 커피 과립화 기술을 응용한 "스프 스프레이 그래뉼(Granule) 공법"으로 완벽하게 해결했습니다. 물에 넣는 순간 사르르 녹아 면발에 짙은 춘장 소스가 착 달라붙는 혁신을 이뤄냈으며, "일요일은 내가 짜파게티 요리사"라는 희대의 광고 캠페인으로 일요일 점심 식문화를 영구히 바꿔놓았습니다. 국내 짜장라면 시장의 90% 이상을 수성하며, 훗날 영화 기생충을 통해 세계적 신드롬을 일으킨 짜파구리의 절대 기둥입니다.',
    canvasX: 730,
    canvasY: 710
  },

  // --- [1986 ~ 1999: 신라면 천하통일 & 명작기] ---
  {
    id: 'shin-ramyun',
    name: '신라면',
    brand: '신라면',
    manufacturer: '농심',
    releaseYear: 1986,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '辛라면神話 (신라면신화)',
    packageType: 'BAG',
    imageUrl: '/images/products/shin-ramyun.jpg',
    isVintagePhoto: false,
    historicalRole: '30년 연속 1위 대한민국 대표 라면',
    doctrineQuote: '“사나이 울리는 신라면 — 한국인의 매운맛 표준”',
    historicalContext: '신춘호 회장이 직접 \'辛\'을 작명하고 빨간색 패키지로 시장을 뒤흔든 불멸의 역작.',
    legacyImpact: '1991년 이후 대한민국 라면 판매 1위 수성, 세계 100개국 수출 K-라면의 정점.',
    editorialNote: '1986년 10월, 故 신춘호 회장이 자신의 성(姓)이자 "매울 辛"을 제품명으로 직접 낙점하고, 당시 금기시되던 파격적인 강렬한 레드-블랙 패키지로 선보인 대한민국 식품사의 최고 걸작입니다. 하루 20여 종의 시식과 1년여간의 연구 끝에 완성된 얼큰한 소고기 육수, 표고버섯의 그윽한 풍미, 순창 고춧가루의 칼칼함이 조화를 이룬 면발은 한국인이 동경하던 궁극의 매운맛 표준을 제시했습니다. 1991년 판매 1위에 오른 이후 30년 넘게 정상의 자리를 단 한 번도 내주지 않았으며, 히말라야 푼힐 전망대부터 스위스 융프라우요흐, 남극 세종기지까지 전 세계 100여 개국에 수출되는 명실상부한 대한민국의 국가대표 문화 아이콘입니다.',
    canvasX: 890,
    canvasY: 230
  },
  {
    id: 'kimchi-sabal',
    name: '김치 사발면',
    brand: '김치사발면',
    manufacturer: '농심',
    releaseYear: 1986,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-bowl',
    factionName: '사발 용기면파',
    hanjaFaction: '泡菜沙鉢 (포채사발)',
    packageType: 'BOWL',
    imageUrl: '/images/products/kimchi-sabal.jpg',
    isVintagePhoto: false,
    historicalRole: '올림픽 김치 라면',
    doctrineQuote: '“동결건조 김치 블록으로 칼칼하고 새콤한 개운함”',
    historicalContext: '86 아시안게임과 88 서울올림픽을 계기로 한국 전통 김치 맛을 세계에 알린 명작.',
    legacyImpact: '육개장사발면과 함께 40년간 한국 용기면 시장의 양대 산맥으로 군림.',
    editorialNote: '1986년 86 아시안게임과 88 서울올림픽을 앞두고 한국 전통 발효식품인 김치를 전 세계인에게 알리기 위해 개발된 기념비적 제품입니다. 인공적인 김치 향료 대신 실제 잘 익은 숙성 김치를 동결건조한 블록을 통째로 갈아 넣어, 뜨거운 물을 붓는 순간 잘 익은 김치찌개의 칼칼하고 시원한 산미가 국물에 그대로 녹아듭니다. 기름진 라면 맛을 개운하게 잡아주는 특유의 깔끔함 덕분에 편의점 삼각김밥과의 조합에서 절대적 1위를 고수하고 있으며, 육개장사발면과 함께 40년간 대한민국 컵라면 시장의 쌍두마차로 굳건히 자리 잡고 있습니다.',
    canvasX: 890,
    canvasY: 870
  },
  {
    id: 'sari-gomtang',
    name: '사리곰탕면',
    brand: '사리곰탕',
    manufacturer: '농심',
    releaseYear: 1988,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-soup',
    factionName: '구수 장국·곰탕파',
    hanjaFaction: '白湯宗家 (백탕종가)',
    packageType: 'BAG',
    imageUrl: '/images/products/sari-gomtang.jpg',
    isVintagePhoto: false,
    historicalRole: '전통 사골 백탕의 원조',
    doctrineQuote: '“진한 사골 국물에 대파 송송, 밥 말아먹는 백탕”',
    historicalContext: '설렁탕·곰탕 전문점 맛을 인스턴트 건조 분말화하여 맵지 않은 백탕의 신기원 개척.',
    legacyImpact: '훗날 신라면 블랙의 우골 보양 육수 가공 기술의 핵심적 모태.',
    editorialNote: '1988년 2월, 붉고 매운 라면 일색이던 시장에 한국 전통 보양식 설렁탕·곰탕의 깊은 맛을 라면으로 구현한 백탕(白湯)의 명작입니다. 양질의 소뼈와 사골을 오랜 시간 푹 고아 농축 분말화한 뽀얗고 진한 국물에 송송 썬 대파의 향긋함을 더했습니다. 자극적이지 않고 구수하며 든든한 국물 덕분에 어린아이부터 어르신까지 온 가족이 부담 없이 즐기는 라면으로 자리 잡았으며, 떡국이나 만둣국의 만능 밑국물 베이스로도 애용되고 있습니다. 이 사리곰탕의 우골 농축 기술은 훗날 2011년 탄생한 프리미엄 보양 라면 신라면 블랙의 핵심 기술적 밑거름이 되었습니다.',
    canvasX: 1040,
    canvasY: 390
  },
  {
    id: 'ojingeo-jjamppong',
    name: '오징어짬뽕',
    brand: '오징어짬뽕',
    manufacturer: '농심',
    releaseYear: 1992,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-neoguri',
    factionName: '얼큰 우동·해물파',
    hanjaFaction: '海物辣湯 (해물랄탕)',
    packageType: 'BAG',
    imageUrl: '/images/products/ojingeo-jjamppong.jpg',
    isVintagePhoto: false,
    historicalRole: '원조 짬뽕라면의 기준',
    doctrineQuote: '“진짜 오징어가 씹히는 얼큰 칼칼한 짬뽕 국물”',
    historicalContext: '중화요리점 짬뽕의 불맛과 해물 풍미를 라면으로 재현한 히트작.',
    legacyImpact: '2015년 짬뽕 대전으로 이어지는 해물 짬뽕 라면의 원조 기준점.',
    editorialNote: '1992년 7월 출시된 오징어짬뽕은 중화요리점 짬뽕의 전유물이던 센 불의 불맛과 해물 풍미를 가정용 라면으로 완벽히 옮겨온 원조 짬뽕라면의 기준점입니다. 실제 동결건조 오징어 건더기가 쫄깃하게 씹히며, 홍합, 새우, 배추, 목이버섯 등 풍성한 해물 채소 엑기스를 더해 얼큰하면서도 시원 칼칼한 국물 맛을 자랑합니다. 술 마신 다음 날 최고의 해장 라면으로 손꼽히며, 2015년 라면 업계에 불어닥친 "프리미엄 짬뽕 대전"의 사상적·기술적 뿌리가 된 대한민국 해물 짬뽕의 영원한 클래식입니다.',
    canvasX: 1040,
    canvasY: 550
  },
  {
    id: 'fried-udon-cup',
    name: '튀김우동 큰사발',
    brand: '튀김우동',
    manufacturer: '농심',
    releaseYear: 1990,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-bowl',
    factionName: '사발 용기면파',
    hanjaFaction: '天婦羅烏冬 (천부라오동)',
    packageType: 'BOWL',
    imageUrl: '/images/products/fried-udon-cup.jpg',
    isVintagePhoto: false,
    historicalRole: '겨울철 휴게소 1위 컵우동',
    doctrineQuote: '“바삭한 튀김과 꽃무늬 맛살, 가쓰오부시 맑은 장국”',
    historicalContext: '고소한 튀김 블록과 미역, 어묵이 어우러진 일본식 정통 우동을 사발면으로 완성.',
    legacyImpact: '군대 PX, 스키장, 고속도로 휴게소에서 대체 불가능한 맑은 우동 사발면 1위.',
    editorialNote: '1990년 10월 출시된 튀김우동 큰사발은 겨울철 대한민국에서 가장 사랑받는 맑은 장국 컵라면의 절대 강자입니다. 가쓰오부시와 간장으로 우려낸 깊고 감칠맛 나는 정통 우동 국물에, 바삭바삭하고 고소한 튀김 블록, 알록달록한 꽃무늬 맛살, 부드러운 미역이 풍성하게 어우러집니다. 군대 혹한기 훈련, 스키장 슬로프, 추운 겨울 고속도로 휴게소에서 얼어붙은 몸을 녹여주는 따뜻한 위로의 음식으로 손꼽히며, 자극적인 매운맛에 지친 소비자들에게 대체 불가능한 힐링 컵라면으로 30년 넘게 사랑받고 있습니다.',
    canvasX: 1100,
    canvasY: 870
  },
  {
    id: 'bogle-jjigae-1999',
    name: '보글보글 찌개면',
    brand: '보글보글',
    manufacturer: '농심',
    releaseYear: 1999,
    epochId: 'epoch-4-shin-dynasty',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '찌개진미 (찌개진미)',
    packageType: 'BAG',
    imageUrl: '/images/products/bogle-jjigae.png',
    isVintagePhoto: true,
    vintageYearNote: '1999년 한국 찌개라면의 원조',
    historicalRole: '부대찌개 라면의 불멸의 원조',
    doctrineQuote: '“진한 사골 육수에 햄과 소시지, 김치가 어우러진 찌개 국물”',
    historicalContext: '1999년 출시되어 대한민국에 찌개라면 열풍을 일으켰으며, 단종 후에도 끊임없는 성원으로 2016년 보글보글 부대찌개면으로 화려하게 부활한 전설의 명작.',
    legacyImpact: '라면 국물에 밥을 말아먹는 한국인의 식습관을 정밀 저격한 최초의 찌개 특화 라면.',
    editorialNote: '1999년 세기말에 등장한 보글보글 찌개면은 대한민국 찌개라면의 신기원을 연 전설의 제품입니다. 푹 고아낸 사골 육수에 햄, 소시지, 볶은 김치, 대파를 듬뿍 넣어 부대찌개 특유의 얼큰하고 진한 국물 맛을 기가 막히게 구현했습니다. 라면을 다 건져 먹고 밥을 말아먹었을 때 가장 진가를 발휘하는 "찌개 특화형 라면"으로 전국적인 마니아층을 형성했으나 원가 상승 등으로 2011년 아쉽게 단종되었습니다. 그러나 소비자들의 5년여에 걸친 끈질긴 재출시 청원 끝에 2016년 "보글보글 부대찌개면"으로 화려하게 부활하여 출시 50일 만에 100억 원 매출을 돌파하는 식품업계 부활 신화를 썼습니다.',
    canvasX: 1180,
    canvasY: 230
  },

  // --- [2000 ~ 2019: 프리미엄 & 웰빙 건면] ---
  {
    id: 'mupama',
    name: '무파마 탕면',
    brand: '무파마',
    manufacturer: '농심',
    releaseYear: 2000,
    epochId: 'epoch-5-premium-wellness',
    factionId: 'faction-soup',
    factionName: '구수 장국·곰탕파',
    hanjaFaction: '三菜解醒 (삼채해성)',
    packageType: 'BAG',
    imageUrl: '/images/products/mupama.jpg',
    isVintagePhoto: false,
    historicalRole: '시원한 해장 소고기탕',
    doctrineQuote: '“무, 파, 마늘의 시원함으로 해장의 종결자”',
    historicalContext: '한국인의 국물 요리 필수 3대 양념 채소를 아낌없이 넣어 개운한 소고기 육수 완성.',
    legacyImpact: '자극적인 매운맛 일변도에서 벗어나 시원하고 깊은 해장 라면의 지평을 엶.',
    editorialNote: '2000년 1월 새천년의 시작과 함께 출시된 무파마 탕면은 한국인의 전통 탕 요리에 필수적인 3대 양념 채소 "무, 파, 마늘"의 첫 글자를 따서 탄생한 프리미엄 해장 라면입니다. 자극적인 캡사이신 위주의 매운맛에 피로감을 느끼던 시장에, 시원하고 달큰한 무와 알싸한 대파, 깊은 풍미의 마늘이 소고기 장국과 어우러져 속을 확 풀어주는 "개운하고 맑은 얼큰함"을 선사했습니다. 채소 원물이 듬뿍 담긴 풍성한 후레이크와 깔끔한 국물로 직장인들의 압도적인 해장 원픽 라면으로 자리 잡으며 프리미엄 탕면의 시대를 열었습니다.',
    canvasX: 1250,
    canvasY: 390
  },
  {
    id: 'spicy-chapagetti',
    name: '사천 짜파게티',
    brand: '짜파게티',
    manufacturer: '농심',
    releaseYear: 2000,
    epochId: 'epoch-5-premium-wellness',
    factionId: 'faction-jjajang',
    factionName: '정통 짜장파',
    hanjaFaction: '四川辣醬 (사천랄장)',
    packageType: 'BAG',
    imageUrl: '/images/products/sichuan-chapagetti.jpg',
    isVintagePhoto: false,
    historicalRole: '매운 짜장의 정석',
    doctrineQuote: '“고추기름과 화자오의 칼칼함이 더해진 어른의 짜장”',
    historicalContext: '짜파게티에 고춧가루를 뿌려 먹던 소비자 취향을 포착해 매콤한 풍미유를 더함.',
    legacyImpact: '짜파구리로 이어지는 매운 짜장 모디슈머 문화의 중요한 징검다리.',
    editorialNote: '2000년 8월 출시된 사천 짜파게티는 소비자들이 일반 짜파게티에 고춧가루나 청양고추를 넣어 비벼 먹던 "매운 짜장" 식문화를 연구진이 기민하게 포착하여 공식 제품화한 선구자적 라면입니다. 달콤짭조름한 전통 과립 춘장 소스에 중국 사천 지방의 알싸한 마라 향미유와 고추기름을 더해, 기름진 느끼함을 완벽하게 잡고 어른들의 입맛을 사로잡는 화끈한 매콤함을 구현했습니다. 훗날 2020년 전 세계를 강타한 "짜파구리"의 매운 짜장 모디슈머 열풍을 20년 앞서 예고했던 혁신적인 매운 볶음면의 효시입니다.',
    canvasX: 1250,
    canvasY: 710
  },
  {
    id: 'shin-black',
    name: '신라면 블랙',
    brand: '신라면',
    manufacturer: '농심',
    releaseYear: 2011,
    epochId: 'epoch-5-premium-wellness',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '黑龍補陽 (흑룡보양)',
    packageType: 'BAG',
    imageUrl: '/images/products/shin-black.jpg',
    isVintagePhoto: false,
    historicalRole: '프리미엄 보양식 라면',
    doctrineQuote: '“우골 보양 육수로 완성한 미식 라면의 정점”',
    historicalContext: '농심 창립 45주년을 맞아 우골 분말을 더해 진하고 부드러운 프리미엄 라면 개막.',
    legacyImpact: '뉴욕타임스 세계 라면 1위에 선정되며 글로벌 시장에서 가장 인정받는 프리미엄 K-라면 등극.',
    editorialNote: '2011년 4월 농심 창립 45주년을 기념하여 탄생한 신라면 블랙은 라면을 "간편한 인스턴트식"에서 "완전한 한 끼 영양 보양식"으로 격상시킨 현대 라면사의 기념비적 마스터피스입니다. 기존 신라면의 얼큰한 양념에 설렁탕 한 그릇 분량의 우골 보양 육수 분말을 통째로 더해, 깊고 묵직하면서도 크리미한 프리미엄 국물을 완성했습니다. 출시 초기 높은 가격대로 논란을 겪기도 했으나, 2020년 미국 뉴욕타임스(NYT)가 선정한 "세계에서 가장 맛있는 라면 1위"에 오르며 글로벌 미식 시장에서 K-라면의 독보적인 프리미엄 품질을 공인받았습니다.',
    canvasX: 1380,
    canvasY: 230
  },
  {
    id: 'jjawang',
    name: '짜왕',
    brand: '짜왕',
    manufacturer: '농심',
    releaseYear: 2015,
    epochId: 'epoch-5-premium-wellness',
    factionId: 'faction-jjajang',
    factionName: '정통 짜장파',
    hanjaFaction: '炸醬王 (짜장왕)',
    packageType: 'BAG',
    imageUrl: '/images/products/jjawang.jpg',
    isVintagePhoto: false,
    historicalRole: '3mm 굵은 굴곡면의 혁신',
    doctrineQuote: '“200℃ 고온 직화 볶음 간짜장과 다시마 굵은 면”',
    historicalContext: '2015년 라면 시장을 뒤흔든 굵은 면발 열풍의 주역으로 출시 두 달 만에 매출 200억 돌파.',
    legacyImpact: '짜장라면의 프리미엄화와 면발 식감 혁신을 선도한 명작.',
    editorialNote: '2015년 4월 출시된 짜왕은 2015년 대한민국 식품업계를 강타한 "굵은 면발 열풍"의 주역이자 프리미엄 짜장면의 황제입니다. 200℃ 이상의 고온 직화 공법으로 춘장과 양파를 볶아 중국집 간짜장의 불맛을 완벽히 재현했으며, 3mm에 달하는 두툼하고 쫄깃한 다시마 굴곡 면발을 적용해 소스가 면발 틈새마다 빈틈없이 배어들게 만들었습니다. 출시 두 달 만에 매출 200억 원을 돌파하며 신라면에 이어 라면 시장 전체 2위에 오르는 기염을 토했고, 라면업계 전체가 앞다투어 굵은 면발 신제품을 쏟아내게 만든 메가 트렌드 세터입니다.',
    canvasX: 1390,
    canvasY: 710
  },
  {
    id: 'shin-non-frying',
    name: '신라면 건면',
    brand: '신라면',
    manufacturer: '농심',
    releaseYear: 2019,
    epochId: 'epoch-5-premium-wellness',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '乾麵三代 (건면삼대)',
    packageType: 'BAG',
    imageUrl: '/images/products/shin-non-frying.jpg',
    isVintagePhoto: false,
    historicalRole: '350kcal 3세대 신라면',
    doctrineQuote: '“바람에 말려 깔끔하게 즐기는 3세대 웰빙 신라면”',
    historicalContext: '기름에 튀기지 않고 열풍으로 건조한 면발로 350kcal의 가벼운 칼로리 구현.',
    legacyImpact: '건면은 맛이 없다는 편견을 깨고 출시 5개월 만에 3,200만 봉을 판매한 웰빙의 정점.',
    editorialNote: '2019년 2월, 신라면 출시 33년 만에 선보인 "3세대 웰빙 신라면"입니다. 기름에 튀기지 않고 특허받은 열풍 건조 공법으로 면을 말려, 칼로리를 일반 유탕면 대비 30% 이상 대폭 낮춘 350kcal로 혁신했습니다. "건면은 국물과 겉돌고 뚝뚝 끊긴다"는 시장의 오랜 편견을 깨기 위해 2년여의 연구 끝에 쫄깃하고 탄력 있는 생면 수준의 식감을 구현했으며, 소고기 엑기스와 표고버섯의 풍미를 응축한 특제 조미유로 신라면 고유의 얼큰함을 완벽히 보존했습니다. 출시 5개월 만에 3,200만 봉을 판매하며 건강과 맛을 모두 잡은 K-건면의 새 시대를 열었습니다.',
    canvasX: 1470,
    canvasY: 390
  },

  // --- [2020 ~ 2026: 모디슈머 융합 & K-크림 퓨전] ---
  {
    id: 'chapaguri-bowl',
    name: '짜파구리 큰사발',
    brand: '짜파구리',
    manufacturer: '농심',
    releaseYear: 2020,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-crossover',
    factionName: '모디슈머 퓨전파',
    hanjaFaction: '奇跡融合 (기적융합)',
    packageType: 'BOWL',
    imageUrl: '/images/products/chapaguri-bowl.jpg',
    isVintagePhoto: false,
    historicalRole: '오스카 4관왕 글로벌 신화',
    doctrineQuote: '“영화 기생충의 세계적 신드롬이 공식 제품으로 탄생”',
    historicalContext: '짜파게티와 너구리를 섞어 먹던 모디슈머 레시피가 아카데미 4관왕을 타고 글로벌 제품화.',
    legacyImpact: '전 세계 50여 개국에 수출되며 K-라면의 위상을 문화 콘텐츠로 승화시킨 전설.',
    editorialNote: '2020년 2월, 봉준호 감독의 영화 "기생충"이 한국 영화 역사상 최초로 칸 영화제 황금종려상에 이어 미국 아카데미(오스카) 시상식 4관왕을 석권하면서 탄생한 글로벌 문화 신화의 결정체입니다. 영화 속 "한우 채끝살 짜파구리"가 전 세계적인 신드롬을 일으키자, 농심은 소비자들이 두 제품을 따로 끓여 배합해야 했던 번거로움을 해결하기 위해 황금 비율을 정밀 배합한 단일 용기면으로 긴급 개발·출시했습니다. 너구리의 얼큰한 해물 풍미와 짜파게티의 고소한 춘장이 절묘하게 녹아든 이 제품은 전 세계 50여 개국에 수출되며 K-푸드의 위상을 드높였습니다.',
    canvasX: 1480,
    canvasY: 550
  },
  {
    id: 'baehongdong',
    name: '배홍동 비빔면',
    brand: '배홍동',
    manufacturer: '농심',
    releaseYear: 2021,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-bibim',
    factionName: '새콤달콤 비빔·냉면파',
    hanjaFaction: '梨紅冬 (이홍동)',
    packageType: 'BAG',
    imageUrl: '/images/products/baehongdong.jpg',
    isVintagePhoto: false,
    historicalRole: '비빔면 시장의 신흥 강자',
    doctrineQuote: '“배, 홍고추, 동치미 비빔장으로 비빔면 2위 도약”',
    historicalContext: '시원한 배와 매콤한 홍고추, 알싸한 동치미 육수를 갈아 넣어 만든 비빔장으로 여름 공략.',
    legacyImpact: '35년간 독점 체제이던 비빔면 시장의 판도를 단숨에 뒤흔들며 연간 1억 봉 판매 돌파.',
    editorialNote: '2021년 3월 출시된 배홍동 비빔면은 35년간 단일 제품이 80% 이상 독점하던 한국 비빔면 시장의 철옹성을 단숨에 무너뜨린 21세기 최고의 신흥 강자입니다. 시원 달콤한 "배(梨)", 매콤한 "홍고추(紅)", 알싸하고 시원한 "동치미(冬)"를 갈아 넣어 1년 동안 연구 개발한 특제 비빔장이 폭발적인 호평을 받았습니다. 특히 기존 비빔면 대비 소스 양을 20% 넉넉하게 담아 마지막 한 젓가락까지 촉촉하게 비빌 수 있도록 차별화했으며, 방송인 유재석을 모델로 한 유쾌한 마케팅과 함께 출시 첫해 만에 2위로 수직 상승하여 연간 1억 봉 판매를 돌파했습니다.',
    canvasX: 1540,
    canvasY: 710
  },
  {
    id: 'kaguri',
    name: '카구리 큰사발',
    brand: '카구리',
    manufacturer: '농심',
    releaseYear: 2022,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-crossover',
    factionName: '모디슈머 퓨전파',
    hanjaFaction: '咖喱烏冬 (가리우동)',
    packageType: 'BOWL',
    imageUrl: '/images/products/kaguri-cup.jpg',
    isVintagePhoto: false,
    historicalRole: 'PC방 모디슈머 공식화',
    doctrineQuote: '“너구리의 다시마 해물맛과 카레의 꾸덕한 조화”',
    historicalContext: 'PC방 이용자들 사이에서 전설로 통하던 카레+너구리 조합을 정식 컵라면으로 출시.',
    legacyImpact: '전자레인지 조리법과 어우러져 Z세대 사이에서 선풍적인 인기를 끈 모디슈머 2호작.',
    editorialNote: '2022년 4월 출시된 카구리는 전국의 PC방 이용자들과 온라인 커뮤니티에서 "밤샘 게임의 영혼의 메뉴"로 불리던 모디슈머 레시피를 농심이 공식 제품화한 Z세대 취향 저격 라면입니다. 너구리 특유의 진한 완도산 다시마 해물 육수에 깊고 진한 카레 소스를 황금비율로 융합하고, 너구리 얼굴 모양의 귀여운 어묵 후레이크를 더했습니다. 특히 1000W 전자레인지 조리에 최적화된 용기 설계를 적용하여, 조리 시 카레 소스가 면발에 찐득하게 배어드는 독보적인 감칠맛을 완성했습니다. 출시 일주일 만에 품절 대란을 기록하며 농심 모디슈머 공식화 2호 성공 신화를 썼습니다.',
    canvasX: 1640,
    canvasY: 550
  },
  {
    id: 'shin-the-red',
    name: '신라면 더 레드',
    brand: '신라면',
    manufacturer: '농심',
    releaseYear: 2023,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-shin',
    factionName: '매운 소고기탕파',
    hanjaFaction: '極辛赤帝 (극신적제)',
    packageType: 'BAG',
    imageUrl: '/images/products/shin-the-red.jpg',
    isVintagePhoto: false,
    historicalRole: '스코빌 7500 극매운맛',
    doctrineQuote: '“소고기 육수의 진함과 후첨 청양고추의 극한 매운맛”',
    historicalContext: '기존 신라면 대비 스코빌지수를 2배 이상 높이고 후첨 양념분말을 더해 한정판 완판 기록.',
    legacyImpact: '매운맛 열풍에 농심만의 정통 소고기 감칠맛으로 응답하며 정식 출시로 전환된 히트작.',
    editorialNote: '2023년 8월, 극강의 매운맛을 갈망하는 소비자들을 위해 신라면 출시 이래 가장 매운 스코빌지수 7,500SHU(기존 신라면 3,400SHU 대비 2배 이상)로 무장하고 등장한 "신라면의 붉은 황제"입니다. 단순한 캡사이신 위주의 자극적인 매운맛이 아닌, 소고기 표고버섯 육수의 농도를 대폭 끌어올리고 청양고추, 후추, 마늘을 조합한 "후첨 양념분말"을 별도로 구성하여 얼큰함의 품격을 완성했습니다. 본래 80일 한정판으로 기획되었으나 출시 80일 만에 2,000만 봉 완판이라는 경이로운 대기록을 세우며 소비자들의 폭발적 성원에 힘입어 전격 정식 제품으로 전환되었습니다.',
    canvasX: 1680,
    canvasY: 230
  },
  {
    id: 'shin-toomba',
    name: '신라면 툼바',
    brand: '신라면',
    manufacturer: '농심',
    releaseYear: 2024,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-crossover',
    factionName: '모디슈머 퓨전파',
    hanjaFaction: '辛酪融合 (신락융합)',
    packageType: 'BAG',
    imageUrl: '/images/products/shin-toomba.jpg',
    isVintagePhoto: false,
    historicalRole: 'K-크림 투움바 퓨전',
    doctrineQuote: '“매콤한 신라면과 생크림·치즈의 황홀한 융합”',
    historicalContext: 'SNS 숏폼을 강타한 투움바 파스타 모디슈머 레시피를 완벽하게 공식 제품화.',
    legacyImpact: '출시 직후 편의점 품절 대란을 일으키며 글로벌 시장으로 즉시 확장된 K-크림 라면의 정점.',
    editorialNote: '2024년 9월 출시된 신라면 툼바는 SNS 숏폼 플랫폼(틱톡, 인스타그램 릴스, 유튜브 쇼츠)을 뜨겁게 달궜던 "신라면 투움바 파스타" 모디슈머 레시피를 농심의 첨단 유화 기술로 완벽하게 상용화한 K-퓨전 라면의 최고봉입니다. 신라면 고유의 얼큰하고 매콤한 소고기 스프에 신선한 생크림, 체다 치즈, 파마산 치즈의 부드럽고 진한 풍미를 절묘하게 배합하여, 매콤하면서도 꾸덕꾸덕한 파스타의 정수를 봉지면과 용기면으로 완벽히 구현했습니다. 출시 직후 전국 편의점과 마트에서 연일 매진 행렬을 기록했으며, 출시 3개월 만에 글로벌 수출길에 오르며 세계인을 사로잡고 있습니다.',
    canvasX: 1760,
    canvasY: 390
  },
  {
    id: 'chapagetti-the-black',
    name: '짜파게티 더 블랙',
    brand: '짜파게티',
    manufacturer: '농심',
    releaseYear: 2024,
    epochId: 'epoch-6-crossover-global',
    factionId: 'faction-jjajang',
    factionName: '정통 짜장파',
    hanjaFaction: '黑風炸醬 (흑풍짜장)',
    packageType: 'BAG',
    imageUrl: '/images/products/chapagetti-the-black.jpg',
    isVintagePhoto: false,
    historicalRole: '짜파게티 40주년 건면 대도약',
    doctrineQuote: '“소고기 풍미유와 굵은 건면으로 완성한 프리미엄 짜파게티”',
    historicalContext: '짜파게티 출시 40주년을 맞아 칼로리는 낮추고 고농축 춘장과 소고기 풍미를 극대화.',
    legacyImpact: '40년 전통 브랜드가 건강과 미식을 동시에 만족시키며 Z세대까지 사로잡은 진화의 상징.',
    editorialNote: '2024년 4월, 짜파게티 출시 40주년을 기념하여 탄생한 차세대 프리미엄 건면 짜장라면입니다. 40년간 온 국민의 입맛을 길들여온 전통의 맛을 한 단계 높은 미식의 경지로 끌어올리기 위해, 튀기지 않은 굵은 건면을 채택하여 칼로리는 465kcal(유탕면 대비 25% 감소)로 낮추고 칼슘을 일일 권장량의 37%까지 강화했습니다. 특히 고농축 춘장 페이스트에 양파와 소고기 풍미유를 최적의 비율로 더해, 갓 볶아낸 중국 요리점 수타 짜장의 깊고 진한 풍미를 안방에서 그대로 느낄 수 있도록 완성한 농심 60년 제면·스프 과학의 결정판입니다.',
    canvasX: 1760,
    canvasY: 710
  }
];

// ============================================================================
// 4. 농심 가문 내 엄격한 역사적 계보 연결선 (LINEAGE_EDGES)
// ============================================================================
export const LINEAGE_EDGES: LineageEdge[] = [
  // 1. 창업 뿌리 계승 (1965 ~ 1975)
  {
    id: 'ns-edge-1',
    fromId: 'lotte-ramyun-1965',
    toId: 'lotte-beef-1970',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '롯데라면의 면발 기술을 바탕으로 소고기 육수 중심의 계보로 발전',
    year: 1970
  },
  {
    id: 'ns-edge-2',
    fromId: 'lotte-ramyun-1965',
    toId: 'lotte-jjajang-1970',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '국물 라면에서 비국물 짜장면으로 한국 최초의 카테고리 분화',
    year: 1970
  },
  {
    id: 'ns-edge-3',
    fromId: 'lotte-ramyun-1965',
    toId: 'nongshim-ramyun-1975',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '1965년 창립 이래 주력 국물 라면이 농심라면으로 정통 계승',
    year: 1975
  },

  // 2. 辛가문 직계 계승 (소고기라면 -> 신라면 -> 블랙 -> 건면 -> 더레드 -> 툼바)
  {
    id: 'ns-edge-4',
    fromId: 'lotte-beef-1970',
    toId: 'shin-ramyun',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '소고기 장국 철학이 신춘호 회장의 친필 브랜드 신라면으로 만개',
    year: 1986
  },
  {
    id: 'ns-edge-5',
    fromId: 'shin-ramyun',
    toId: 'bogle-jjigae-1999',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '신라면의 매운 탕 국물 연구 노하우를 사골·햄 풍미의 찌개 국물로 심화 발전',
    year: 1999
  },
  {
    id: 'ns-edge-6',
    fromId: 'shin-ramyun',
    toId: 'shin-black',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '신라면 25주년 기념 우골 보양 육수를 결합한 공식 프리미엄 업그레이드',
    year: 2011
  },
  {
    id: 'ns-edge-7',
    fromId: 'shin-ramyun',
    toId: 'shin-non-frying',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '신라면 고유의 얼큰한 맛을 바람에 말린 논프라잉 건면으로 공식 계승',
    year: 2019
  },
  {
    id: 'ns-edge-8',
    fromId: 'shin-ramyun',
    toId: 'shin-the-red',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '스코빌 7500 극매운맛과 후첨 양념분말로 신라면의 매운맛 한계 극대화',
    year: 2023
  },
  {
    id: 'ns-edge-9',
    fromId: 'shin-ramyun',
    toId: 'shin-toomba',
    relationType: 'FACTION_SPLIT',
    factionColor: '#a855f7',
    historicalEvidence: '신라면 매운맛에 투움바 생크림·치즈를 융합한 K-크림 파스타 공식화',
    year: 2024
  },

  // 3. 구수 장국·곰탕 가문 (농심라면 -> 안성탕면 -> 사리곰탕 -> 무파마)
  {
    id: 'ns-edge-10',
    fromId: 'nongshim-ramyun-1975',
    toId: 'anseongtangmyeon',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '농심라면의 가마솥 된장 장국 철학이 안성스프공장 기술과 결합해 안성탕면으로 탄생',
    year: 1983
  },
  {
    id: 'ns-edge-11',
    fromId: 'anseongtangmyeon',
    toId: 'sari-gomtang',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '안성공장의 우골 추출 기술을 전통 설렁탕·곰탕 백탕으로 분화',
    year: 1988
  },
  {
    id: 'ns-edge-12',
    fromId: 'anseongtangmyeon',
    toId: 'mupama',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '구수한 장국에 무·파·마늘 3대 채소를 강화해 개운한 해장탕으로 발전',
    year: 2000
  },
  {
    id: 'ns-edge-12-rivalry',
    fromId: 'anseongtangmyeon',
    toId: 'shin-ramyun',
    relationType: 'MARKET_RIVALRY',
    factionColor: '#dc2626',
    historicalEvidence: '안성탕면(구수한 맛 1위)과 신라면(얼큰한 맛 1위)의 농심 사내 선의의 라이벌전',
    year: 1986
  },

  // 4. 정통 짜장 가문 (롯데짜장면 -> 짜파게티 -> 사천짜파게티 -> 짜왕 -> 짜파게티 더 블랙)
  {
    id: 'ns-edge-13',
    fromId: 'lotte-jjajang-1970',
    toId: 'chapagetti',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '대한민국 최초 롯데짜장면의 연구 노하우가 과립스프 공법의 짜파게티로 집대성',
    year: 1984
  },
  {
    id: 'ns-edge-14',
    fromId: 'chapagetti',
    toId: 'spicy-chapagetti',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '고추기름과 화자오를 더해 짜파게티의 매운맛 라인업 구축',
    year: 2000
  },
  {
    id: 'ns-edge-15',
    fromId: 'chapagetti',
    toId: 'jjawang',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '3mm 굵은 굴곡면과 200℃ 고온 직화 춘장을 적용한 프리미엄 간짜장 진화',
    year: 2015
  },
  {
    id: 'ns-edge-16',
    fromId: 'chapagetti',
    toId: 'chapagetti-the-black',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '짜파게티 40주년을 맞아 건면과 소고기 풍미유로 완성한 마스터피스',
    year: 2024
  },

  // 5. 얼큰 우동·해물 가문 (너구리 -> 오징어짬뽕 -> 카구리)
  {
    id: 'ns-edge-17',
    fromId: 'neoguri',
    toId: 'ojingeo-jjamppong',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '너구리의 해물 육수 기술을 쫄깃한 오징어 건더기와 짬뽕 불맛으로 확장',
    year: 1992
  },
  {
    id: 'ns-edge-18',
    fromId: 'neoguri',
    toId: 'kaguri',
    relationType: 'FACTION_SPLIT',
    factionColor: '#a855f7',
    historicalEvidence: '너구리 해물 다시마 육수에 카레를 결합한 PC방 모디슈머 공식화',
    year: 2022
  },
  {
    id: 'ns-edge-18-udon',
    fromId: 'neoguri',
    toId: 'fried-udon-cup',
    relationType: 'FACTION_SPLIT',
    factionColor: '#d97706',
    historicalEvidence: '너구리의 통통한 우동 면발 연구가 일본식 맑은 튀김우동 용기면으로 발전',
    year: 1990
  },

  // 6. 사발 용기면 가문 (소고기라면 -> 육개장 사발면 -> 김치 사발면)
  {
    id: 'ns-edge-19-root',
    fromId: 'lotte-beef-1970',
    toId: 'yukgaejang-sabal',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '소고기 장국 베이스가 한국 최초의 탕면 사발면인 육개장 사발면으로 계승',
    year: 1982
  },
  {
    id: 'ns-edge-19',
    fromId: 'yukgaejang-sabal',
    toId: 'kimchi-sabal',
    relationType: 'DIRECT_LINEAGE',
    factionColor: '#ef4444',
    historicalEvidence: '육개장사발면 용기에 동결건조 김치 블록을 적용해 올림픽 기념작으로 출시',
    year: 1986
  },

  // 7. 모디슈머 크로스오버 (짜파게티 + 너구리 -> 짜파구리)
  {
    id: 'ns-edge-20',
    fromId: 'chapagetti',
    toId: 'chapaguri-bowl',
    relationType: 'PARADIGM_SHIFT',
    factionColor: '#a855f7',
    historicalEvidence: '짜파게티 춘장 베이스와 너구리 해물 매운맛의 기적적 융합 (오스카 4관왕 신화)',
    year: 2020
  },
  {
    id: 'ns-edge-21',
    fromId: 'neoguri',
    toId: 'chapaguri-bowl',
    relationType: 'PARADIGM_SHIFT',
    factionColor: '#a855f7',
    historicalEvidence: '너구리의 오동통한 면발과 매운 분말스프가 짜파게티와 결합',
    year: 2020
  },

  // 8. 비빔·냉면 가문 (배홍동 비빔면)
  {
    id: 'ns-edge-22',
    fromId: 'lotte-jjajang-1970',
    toId: 'baehongdong',
    relationType: 'FACTION_SPLIT',
    factionColor: '#0284c7',
    historicalEvidence: '비국물 라면의 노하우가 배·홍고추·동치미 숙성 비빔면으로 대도약',
    year: 2021
  }
];

export function getRoleBadgeStyle(role: string): string {
  if (role.includes('시조') || role.includes('원조') || role.includes('최초')) {
    return 'bg-amber-400 text-stone-950 font-black shadow-xs';
  }
  if (role.includes('군주') || role.includes('1위') || role.includes('천하통일')) {
    return 'bg-red-600 text-white font-black shadow-xs';
  }
  if (role.includes('모디슈머') || role.includes('퓨전') || role.includes('신화')) {
    return 'bg-purple-600 text-white font-black shadow-xs';
  }
  if (role.includes('프리미엄') || role.includes('진화') || role.includes('건면')) {
    return 'bg-sky-600 text-white font-black shadow-xs';
  }
  return 'bg-stone-700 text-stone-100 font-bold';
}

// ============================================================================
// 5. 농심 6대 계파별 연대기 (FACTION_CHRONICLES)
// ============================================================================
export const FACTION_CHRONICLES: FactionChronicle[] = [
  {
    id: 'spicy-beef',
    name: '매운 소고기탕파 (辛가문)',
    hanja: '辛湯宗家 (신탕종가)',
    themeColor: {
      primary: '#dc2626',
      bg: '#fef2f2',
      text: '#991b1b',
      border: '#f87171'
    },
    riseDecade: '1970년대 ~ 현재',
    hegemonyStatus: 'RULING',
    summary: '1970년 소고기라면에서 출발하여 1986년 신라면으로 완성된 대한민국 라면의 40년 절대 종가이자 천하통일 군주 계파',
    doctrine: '“얼큰하고 칼칼한 소고기 장국이야말로 한국인의 입맛을 사로잡는 영원한 기준”',
    chronicleStory: [
      '1970년: 소고기라면 출시로 닭고기 일색이던 시장에 한국식 소고기 장국 혁명',
      '1986년: 故 신춘호 회장의 친필 辛 패키지로 신라면 출시, 사나이 울리는 매운맛 신화 창조',
      '1991년: 한국 라면 시장 단일 제품 점유율 1위 등극 후 30년 넘게 무패 행진',
      '2011년: 우골 보양 육수의 프리미엄 신라면 블랙 출시, 뉴욕타임스 세계 라면 1위 선정',
      '2023년: 스코빌 7,500 SHU 극한 매운맛의 신라면 더 레드로 정통파 입지 재확인'
    ],
    flagshipIds: ['lotte-beef-1970', 'shin-ramyun', 'shin-black', 'shin-non-frying', 'shin-the-red']
  },
  {
    id: 'seafood-ocean',
    name: '얼큰 우동·해물파 (너구리 가문)',
    hanja: '海物烏冬 (해물오동)',
    themeColor: {
      primary: '#0284c7',
      bg: '#f0f9ff',
      text: '#075985',
      border: '#38bdf8'
    },
    riseDecade: '1982년 ~ 현재',
    hegemonyStatus: 'MAINSTREAM',
    summary: '완도산 통다시마와 오징어, 미역의 시원칼칼한 바다 육수에 오동통한 굵은 면발을 결합한 독보적 해물 라면 계파',
    doctrine: '“오동통통 쫄깃쫄깃, 완도 다시마 한 조각이 빚어내는 바다의 깊은 감칠맛”',
    chronicleStory: [
      '1982년: 1년간 2억 원의 연구비 투입 끝에 통다시마를 넣은 국내 최초 우동 라면 너구리 탄생',
      '1992년: 중화요리 짬뽕의 불맛과 오징어 건더기를 구현한 오징어짬뽕 출시',
      '2020년: 기생충 아카데미 4관왕과 함께 전 세계가 열광한 짜파구리 공식 제품화',
      '2022년: PC방 모디슈머의 인기 레시피를 반영한 카구리 큰사발 탄생'
    ],
    flagshipIds: ['neoguri', 'neoguri-mild', 'ojingeo-jjamppong', 'kaguri', 'saewootang-cup']
  },
  {
    id: 'jjajang-chunjang',
    name: '정통 춘장 짜장파 (짜파게티 가문)',
    hanja: '炸醬統霸 (짜장통패)',
    themeColor: {
      primary: '#78350f',
      bg: '#fef3c7',
      text: '#451a03',
      border: '#b45309'
    },
    riseDecade: '1970년 ~ 현재',
    hegemonyStatus: 'RULING',
    summary: '1970년 대한민국 최초의 인스턴트 짜장면을 탄생시키고, 1984년 짜파게티로 대한민국 짜장라면 시장의 90%를 영구 장악한 제국',
    doctrine: '“일요일은 내가 짜파게티 요리사, 과립 스프 공법으로 뭉침 없이 비벼내는 춘장의 예술”',
    chronicleStory: [
      '1970년: 대한민국 최초의 인스턴트 비국물 라면인 롯데 짜장면 출시',
      '1984년: 특허 과립스프 공법과 올리브 풍미유를 장착한 국민 라면 짜파게티 탄생',
      '2000년: 매운맛 마니아를 겨냥한 사천 짜파게티로 라인업 다변화',
      '2015년: 3mm 굵은 굴곡면과 200℃ 고온 직화 춘장의 짜왕 열풍',
      '2024년: 짜파게티 40주년 기념 건면 프리미엄 짜파게티 더 블랙 출시'
    ],
    flagshipIds: ['lotte-jjajang-1970', 'chapagetti', 'spicy-chapagetti', 'jjawang', 'chapagetti-the-black']
  },
  {
    id: 'bone-broth',
    name: '구수 장국·곰탕파 (안성탕면 가문)',
    hanja: '安城醬湯 (안성장탕)',
    themeColor: {
      primary: '#d97706',
      bg: '#fffbeb',
      text: '#92400e',
      border: '#fde68a'
    },
    riseDecade: '1975년 ~ 현재',
    hegemonyStatus: 'MAINSTREAM',
    summary: '구봉서·곽규석의 농심라면에서 안성스프공장의 안성탕면, 사리곰탕면으로 이어지는 한국 전통 탕반(湯飯) 문화의 계승자',
    doctrine: '“내 입에 안성맞춤, 가마솥에서 푹 고아낸 소고기 우골과 시골 된장의 구수한 조화”',
    chronicleStory: [
      '1975년: "형님 먼저 드시오, 아우 먼저 드시오" 농심라면의 대히트로 사명 변경의 모태 마련',
      '1983년: 세계적 최첨단 안성스프공장 준공작 안성탕면 출시, 1985년 농심의 시장 1위 탈환 견인',
      '1988년: 진한 사골 국물의 미학을 살린 사리곰탕면 출시로 맑은 백탕 시장 개척',
      '2000년: 무·파·마늘 3대 천연 채소로 시원한 해장 소고기탕을 완성한 무파마 탕면 출시'
    ],
    flagshipIds: ['nongshim-ramyun-1975', 'anseongtangmyeon', 'sari-gomtang', 'mupama']
  },
  {
    id: 'bibim-cold',
    name: '새콤달콤 비빔·냉면파 (배홍동 가문)',
    hanja: '梨紅冬 (이홍동)',
    themeColor: {
      primary: '#0284c7',
      bg: '#f0f9ff',
      text: '#0369a1',
      border: '#7dd3fc'
    },
    riseDecade: '1990년대 ~ 현재',
    hegemonyStatus: 'MAINSTREAM',
    summary: '도토리쫄쫄면, 둥지냉면의 면발 건조 기술을 집대성해 배·홍고추·동치미 비빔장으로 비빔면 시장의 신흥 강자로 떠오른 계파',
    doctrine: '“배와 홍고추와 동치미가 어우러진 시원하고 깔끔한 매콤달콤함”',
    chronicleStory: [
      '1993년: 도토리 전분을 넣은 쫄깃한 면발의 도토리쫄쫄면 출시',
      '2008년: 면을 새 둥지처럼 말아 바람에 건조한 차세대 냉면 둥지냉면 출시',
      '2021년: 배·홍고추·동치미 숙성 비빔장으로 35년 비빔면 독점 시장을 뒤흔든 배홍동 비빔면 출시',
      '2023년: 배홍동 쫄쫄면 및 칼제비 비빔면으로 여름철 면 시장의 강력한 2강 구도 확립'
    ],
    flagshipIds: ['baehongdong', 'chal-bibimmyeon', 'doongji-dongchimi', 'baehongdong-kalbim']
  },
  {
    id: 'cream-fusion',
    name: '모디슈머 퓨전파 (짜파구리·툼바 가문)',
    hanja: '奇跡融合 (기적융합)',
    themeColor: {
      primary: '#9333ea',
      bg: '#faf5ff',
      text: '#6b21a8',
      border: '#d8b4fe'
    },
    riseDecade: '2020년대 ~ 현재',
    hegemonyStatus: 'EXPEDITIONARY',
    summary: '소비자가 직접 창조한 모디슈머 레시피를 공식 제품으로 승화시켜 전 세계 Z세대의 입맛을 사로잡은 미래형 융합 계파',
    doctrine: '“경계를 허무는 맛의 결합, 신라면과 생크림, 짜파게티와 너구리가 빚어낸 퓨전 미학”',
    chronicleStory: [
      '2020년: 영화 <기생충> 아카데미 4관왕에 힘입어 짜파구리 큰사발 공식 글로벌 출시',
      '2022년: PC방 황금 레시피인 카레+너구리를 용기면으로 구현한 카구리 출시',
      '2024년: SNS 투움바 파스타 유행을 완벽히 재현한 신라면 툼바로 편의점 품절 대란 기록'
    ],
    flagshipIds: ['chapaguri-bowl', 'kaguri', 'shin-toomba', 'shin-toomba-bigbowl']
  },
  {
    id: 'fire-bokkeum',
    name: '국물 없는 매운 볶음면파',
    hanja: '辛火炒麵 (신화초면)',
    themeColor: {
      primary: '#ea580c',
      bg: '#fff7ed',
      text: '#9a3412',
      border: '#fdba74'
    },
    riseDecade: '2020년대 ~ 현재',
    hegemonyStatus: 'MAINSTREAM',
    summary: '신라면 고유의 얼큰한 표고 소고기 매운맛을 국물 없이 자작하게 볶아내는 국물리스 볶음면 계파',
    doctrine: '“면발 속속들이 배어드는 강렬한 불맛과 매콤한 볶음 소스의 카타르시스”',
    chronicleStory: [
      '2021년: 신라면 출시 35주년을 맞아 국물 없는 신라면 볶음면 전격 출시',
      '2022년: 글로벌 시장 수출용 매운 볶음면 라인업 확대'
    ],
    flagshipIds: ['shin-stir-fry', 'shin-stir-fry-cup']
  }
];
