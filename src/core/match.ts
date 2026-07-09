import type { NormalizedNode } from "../schema/intermediate.js";

/**
 * A correspondence between a design node and an impl node.
 * Either side may be absent:
 *   - design only → the node is "missing" from the implementation
 *   - impl only   → the node is "extra" in the implementation
 */
export interface Pair {
  design?: NormalizedNode;
  impl?: NormalizedNode;
}

/**
 * Walk both trees and pair up corresponding nodes into a flat list.
 *
 * v1 strategy (keep it simple, ship it, then improve):
 *   - match children by `id`/`name`; fall back to same index among siblings
 *   - recurse into the children of matched pairs
 *   - leftover design children → design-only Pairs; leftover impl → impl-only
 *
 * Later: upgrade to geometric-overlap matching for unnamed nodes.
 */
export function matchTrees(design: NormalizedNode, impl: NormalizedNode): Pair[] {
  // TODO(step 3): produce the flat list of Pairs across both trees.
  throw new Error("Not implemented: matchTrees — see Step 3.");
}
