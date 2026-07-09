// The common intermediate schema.
//
// Both sources (Figma design, Playwright implementation) are normalized INTO
// this shape before any comparison happens. Nothing downstream of the
// normalizers should ever know which source a node came from.

export type NodeKind = "text" | "box" | "image" | "group";

/** Canonical color: r,g,b in 0–255, a (alpha) in 0–1. */
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

/** Box geometry. x,y are RELATIVE to the parent's top-left (see normalizers). */
export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Border {
  width: number; // px
  color: Color;
}

export interface VisualStyle {
  fill?: Color;
  opacity: number; // 0–1
  radius: number; // px corner radius
  border?: Border;
}

export interface TextStyle {
  content: string;
  fontFamily: string;
  fontSize: number; // px
  fontWeight: number; // 100–900 (numeric)
  lineHeight: number; // px
  letterSpacing: number; // px
  color: Color;
  align: "left" | "center" | "right" | "justify";
}

export interface NormalizedNode {
  id: string; // stable key used to match across trees
  name: string; // human-readable label ("CTA Button")
  kind: NodeKind;
  box: Box;
  visual: VisualStyle;
  text?: TextStyle; // present only when kind === "text"
  children: NormalizedNode[];
}
