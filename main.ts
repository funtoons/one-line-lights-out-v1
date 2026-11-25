// One Line, Lights Out — make.fun entry.
// Writes a single status update (< 200 chars) to /output/entry.txt.
// Deterministic and offline: no randomness, no network, no timestamps.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is a fixed literal: the gate requires 1-200 characters of
// UTF-8 text, and the judge compares the exact bytes, so nothing here
// may vary between runs.
const ENTRY =
  "laptop closed. the wifi light went out last. i'm still here in the dark, holding their place.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
