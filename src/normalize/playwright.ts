import type { NormalizedNode } from "../schema/intermediate.js";
// Step 2: import { fromCssColor, px } from "./color.js";

/**
 * Minimal shape of a captured DOM node
 * (Playwright: getBoundingClientRect() + getComputedStyle()).
 * `styles` holds raw CSS strings keyed by camelCase property.
 */
export interface PwRawNode {
  selector: string;
  tag: string;
  text?: string;
  box: { x: number; y: number; width: number; height: number };
  styles: Record<string, string>; // e.g. styles.backgroundColor === "rgb(26, 102, 230)"
  children?: PwRawNode[];
}

/**
 * Map a captured DOM tree into the common schema.
 *
 * Key jobs:
 *  - parse CSS strings via fromCssColor (backgroundColor → visual.fill) and
 *    px (borderRadius, fontSize, lineHeight, ...)
 *  - classify kind: has meaningful text → "text", else "box"/"group"
 *  - convert the viewport-space box into a box RELATIVE to the parent, so the
 *    result is comparable to the Figma side
 *  - recurse over children
 */
export function normalizePlaywright(raw: PwRawNode): NormalizedNode {
  // TODO(step 2): implement the mapping described above.
  throw new Error("Not implemented: normalizePlaywright — see Step 2.");
}
