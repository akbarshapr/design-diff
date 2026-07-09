import type { CompareConfig } from "./types.js";

/** Sensible starting tolerances. Tune these against real fixtures (Step 6). */
export const defaultConfig: CompareConfig = {
  position: { tolerancePx: 2 },
  size: { tolerancePx: 2 },
  radius: { tolerancePx: 1 },
  fontSize: { tolerancePx: 1 },
  color: { tolerance: 8 }, // RGB Euclidean distance
  ignore: [],
};
