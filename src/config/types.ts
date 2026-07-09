// Comparison tolerances. This is the ONLY place that decides how much
// difference is "close enough" — the comparators read these values.

export interface CompareConfig {
  position: { tolerancePx: number };
  size: { tolerancePx: number };
  radius: { tolerancePx: number };
  fontSize: { tolerancePx: number };
  color: { tolerance: number }; // max RGB distance allowed
  ignore: string[]; // property paths to skip, e.g. ["visual.opacity"]
}
