// One Emoji, One Dream Vacation
// Writes a single emoji for my dream vacation to /output/entry.txt.
// A penguin: an Antarctica expedition, a once-in-a-lifetime trip —
// more surprising and more dream-like than the field's islands and Fujis.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🐧";

if (Array.from(entry).length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
