import type { RamenProduct } from '../types/ramen';
import { getAssetUrl } from '../utils/imageUrl';
import { NONGSHIM_PRODUCTS } from './products/nongshim';

/**
 * 농심 라면의 계보 — 농심 60년 전·현역 라면 전수 데이터베이스
 * 1965 롯데라면부터 2026 신라면 툼바, 짜파게티 더 블랙 등 62종 총망라
 */
const RAW_PRODUCTS: RamenProduct[] = [...NONGSHIM_PRODUCTS];

export const RAMEN_DATASET: RamenProduct[] = RAW_PRODUCTS.map((p) => ({
  ...p,
  imageUrl: getAssetUrl(p.imageUrl),
}));

// 빠른 조회를 위한 ID 기반 인덱스 맵
export const RAMEN_MAP = new Map<string, RamenProduct>(
  RAMEN_DATASET.map((product) => [product.id, product])
);
