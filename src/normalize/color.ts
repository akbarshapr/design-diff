// Worked example: the source-reconciliation helpers. This is the pattern the
// normalizers follow — take whatever a source hands you, return canonical types.

import type { Color } from "../schema/intermediate.js";

/** Figma color: { r,g,b,a } in 0–1 → canonical (r,g,b 0–255, a 0–1). */
export function fromFigmaColor(c: {
  r: number;
  g: number;
  b: number;
  a?: number;
}): Color {
  return {
    r: Math.round(c.r * 255),
    g: Math.round(c.g * 255),
    b: Math.round(c.b * 255),
    a: c.a ?? 1,
  };
}

/** CSS color: "rgb(26,102,230)" | "rgba(...)" | "#1a66e6" → canonical. */
export function fromCssColor(s: string): Color {
  const rgb = s.match(/rgba?\(([^)]+)\)/i);
  const body = rgb?.[1];
  if (body) {
    const p = body.split(",").map((x) => parseFloat(x.trim()));
    return { r: p[0] ?? 0, g: p[1] ?? 0, b: p[2] ?? 0, a: p[3] ?? 1 };
  }
  const hex = s.trim().replace("#", "");
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }
  throw new Error(`Unrecognized color: ${s}`);
}

/** RGB Euclidean distance, used by the color tolerance check. Upgrade to ΔE later. */
export function colorDistance(a: Color, b: Color): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

/** Parse a CSS length or bare number to px: "8px" | "16" | 8 → number. */
export function px(v: string | number, fallback = 0): number {
  if (typeof v === "number") return v;
  const n = parseFloat(v);
  return Number.isNaN(n) ? fallback : n;
}
