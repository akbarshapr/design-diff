// Entry point (Step 6). Wire everything together once the engine is implemented:
//
//   import { readFileSync } from "node:fs";
//   import { compare } from "./core/compare.js";
//   import { defaultConfig } from "./config/defaults.js";
//
//   const design = JSON.parse(readFileSync("src/fixtures/design.sample.json", "utf8"));
//   const impl   = JSON.parse(readFileSync("src/fixtures/impl.sample.json", "utf8"));
//   const report = compare(design, impl, defaultConfig);
//   console.log(JSON.stringify(report, null, 2));
//
// Write those two fixtures for one small component where you already know the
// expected diff (e.g. impl.x off by 2px, fill slightly wrong) so you can verify
// the report catches exactly those.

console.log("design-diff: implement Step 6 (fixtures + compare wiring).");
