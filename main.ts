import fs from "node:fs";
const entry = "🏝️";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
