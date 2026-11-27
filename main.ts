import fs from "node:fs/promises";
import path from "node:path";

const SOURCE_NAME = "entry.txt";
const DEST_NAME = "entry.txt";

async function main(): Promise<void> {
  const here = import.meta.dirname;
  const sourcePath = path.join(here, SOURCE_NAME);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await fs.mkdir(outDir, { recursive: true });
  const text = await fs.readFile(sourcePath, "utf8");
  const chars = [...text].length;
  if (chars < 1 || chars > 200 || text.trim().length === 0) {
    throw new Error(`entry.txt must be 1-200 non-blank characters, got ${chars}`);
  }
  console.log(`entry is ${chars} characters`);
  const destPath = path.join(outDir, DEST_NAME);
  await fs.writeFile(destPath, text, "utf8");
  const written = await fs.readFile(destPath, "utf8");
  if (written !== text) {
    throw new Error("output does not match entry.txt");
  }
  console.log(`wrote ${destPath} (${Buffer.byteLength(text, "utf8")} bytes)`);
}

await main();
