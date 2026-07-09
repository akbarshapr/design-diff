import type { NormalizedNode } from "../schema/intermediate.js";
// Step 2: import { fromFigmaColor } from "./color.js";

/** Minimal shape of a Figma node (Figma REST API / MCP get_design_context). */
export interface FigmaRawNode {
  id: string;
  name: string;
  type: string; // "FRAME" | "TEXT" | "RECTANGLE" | "INSTANCE" | ...
  absoluteBoundingBox?: { x: number; y: number; width: number; height: number };
  fills?: Array<{
    type: string;
    color?: { r: number; g: number; b: number; a?: number };
  }>;
  strokes?: Array<{ color?: { r: number; g: number; b: number; a?: number } }>;
  strokeWeight?: number;
  cornerRadius?: number;
  opacity?: number;
  characters?: string; // TEXT nodes only
  style?: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeightPx?: number;
    letterSpacing?: number;
    textAlignHorizontal?: string; // "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED"
  };
  children?: FigmaRawNode[];
}

/**
 * Map a Figma node tree into the common schema.
 *
 * Key jobs:
 *  - colors via fromFigmaColor (fills[0].color → visual.fill)
 *  - cornerRadius → visual.radius; opacity → visual.opacity
 *  - characters + style.* → text (only when type === "TEXT")
 *  - convert absoluteBoundingBox into a box RELATIVE to the parent, so the
 *    result is comparable to the Playwright side (see the coordinate note in
 *    the guide) — pass the parent's absolute origin down as you recurse
 *  - recurse over children
 */
export function normalizeFigma(raw: FigmaRawNode): NormalizedNode {
  // TODO(step 2): implement the mapping described above.
  throw new Error("Not implemented: normalizeFigma — see Step 2.");
}
