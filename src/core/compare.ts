import { normalizeFigma, type FigmaRawNode } from "../normalize/figma.js";
import { normalizePlaywright, type PwRawNode } from "../normalize/playwright.js";
import { matchTrees } from "./match.js";
import type { CompareConfig } from "../config/types.js";
import type { DiffReport } from "../report/types.js";

/**
 * The engine. Normalizes both raw inputs into the common schema, matches nodes
 * across the two trees, then diffs each matched pair property-by-property using
 * the tolerances in `config`.
 */
export function compare(
  designData: FigmaRawNode,
  implData: PwRawNode,
  config: CompareConfig,
): DiffReport {
  const design = normalizeFigma(designData);
  const impl = normalizePlaywright(implData);

  const pairs = matchTrees(design, impl);

  // TODO(step 5): turn each Pair into a NodeDiff:
  //   - design only → status "missing"
  //   - impl only   → status "extra"
  //   - both        → run comparators (./comparators.js) for box.x/box.y,
  //                   width/height, visual.radius, visual.fill, text.* ;
  //                   node status = "match" if every PropDiff matches else "mismatch"
  //   Skip any property path listed in config.ignore.
  // TODO(step 5): roll the NodeDiffs up into DiffReport.summary (incl. passRate).
  void pairs; // remove once the report is built
  throw new Error("Not implemented: build NodeDiffs + summary — see Step 5.");
}
