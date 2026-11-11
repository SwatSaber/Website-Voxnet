export const PHI = 1.618;

/**
 * Modular Golden Ratio spacing & dimension progression anchored at 16px base:
 * - phi^-1 (~10px): 10
 * - phi^0 (16px): 16
 * - phi^1 (~26px): 26
 * - phi^2 (~42px): 42
 * - phi^3 (~68px): 68
 * - phi^4 (~110px): 110
 * - phi^5 (~178px): 178
 */
export const GOLDEN_SCALE = {
  micro: 6,
  xs: 10,
  base: 16,
  sm: 26,
  md: 42,
  lg: 68,
  xl: 110,
  xxl: 178,
} as const;

export const DESKTOP_BASELINE_WIDTH = 1440;
export const CONTAINER_MAX_WIDTH = 1220;
export const DESKTOP_CONTAINER_PADDING_X = 68;

/**
 * Golden Ratio split constants (1.618fr : 1fr -> 61.8% / 38.2%)
 */
export const GOLDEN_SPLIT = {
  majorShare: PHI / (PHI + 1),
  minorShare: 1 / (PHI + 1),
} as const;

export function computeDesktopSideSpace(viewportWidth: number = DESKTOP_BASELINE_WIDTH): {
  outerMargin: number;
  innerPadding: number;
  totalSideSpace: number;
  usableContentWidth: number;
} {
  const clampedBox = Math.min(viewportWidth, CONTAINER_MAX_WIDTH);
  const outerMargin = (viewportWidth - clampedBox) / 2;
  const innerPadding = viewportWidth >= 1024 ? DESKTOP_CONTAINER_PADDING_X : viewportWidth >= 768 ? 42 : 26;
  const totalSideSpace = outerMargin + innerPadding;
  const usableContentWidth = viewportWidth - totalSideSpace * 2;

  return {
    outerMargin,
    innerPadding,
    totalSideSpace,
    usableContentWidth,
  };
}

export function computeGoldenColumns(
  containerWidth: number,
  gap: number = GOLDEN_SCALE.md
): { majorColumn: number; minorColumn: number; ratio: number } {
  const trackWidth = Math.max(0, containerWidth - gap);
  const majorColumn = Math.round(trackWidth * GOLDEN_SPLIT.majorShare);
  const minorColumn = Math.round(trackWidth * GOLDEN_SPLIT.minorShare);

  return {
    majorColumn,
    minorColumn,
    ratio: Number((majorColumn / minorColumn).toFixed(3)),
  };
}
