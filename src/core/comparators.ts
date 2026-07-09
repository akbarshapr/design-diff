import type { Color } from "../schema/intermediate.js";
import type { PropDiff } from "../report/types.js";
// Step 4: import { colorDistance } from "../normalize/color.js";

// The ONLY place tolerance logic lives. Each function is pure: given expected,
// actual and a tolerance, return a PropDiff whose status is match/mismatch.

/** Numeric comparison with an absolute tolerance (px, weight, radius, ...). */
export function compareNumber(
  property: string,
  expected: number,
  actual: number,
  tolerance: number,
): PropDiff {
  // TODO(step 4): const delta = Math.abs(expected - actual);
  //   return { property, expected, actual, delta, tolerance,
  //            status: delta <= tolerance ? "match" : "mismatch" };
  throw new Error("Not implemented: compareNumber — see Step 4.");
}

/** Color comparison using RGB distance against a tolerance. */
export function compareColor(
  property: string,
  expected: Color,
  actual: Color,
  tolerance: number,
): PropDiff {
  // TODO(step 4): const delta = colorDistance(expected, actual); (import it above)
  //   return { property, expected, actual, delta, tolerance,
  //            status: delta <= tolerance ? "match" : "mismatch" };
  throw new Error("Not implemented: compareColor — see Step 4.");
}
