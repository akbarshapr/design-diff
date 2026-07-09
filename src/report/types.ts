// The output contract: what compare() returns and what later feeds Claude.

export type DiffStatus = "match" | "mismatch" | "missing" | "extra";

/** One property-level comparison result on a matched node. */
export interface PropDiff {
  property: string; // "box.x", "visual.fill", "text.fontSize"
  expected: unknown; // design value
  actual: unknown; // impl value
  delta?: number;
  tolerance?: number;
  status: "match" | "mismatch";
}

export interface NodeDiff {
  nodeId: string;
  path: string; // "root/Header/CTA Button"
  status: DiffStatus;
  props: PropDiff[]; // empty for "missing" / "extra"
}

export interface DiffReport {
  summary: {
    nodesCompared: number;
    matched: number;
    mismatched: number;
    missing: number;
    extra: number;
    passRate: number; // 0–1
  };
  nodes: NodeDiff[];
}
