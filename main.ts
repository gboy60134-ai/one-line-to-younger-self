import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

async function main(): Promise<void> {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  await mkdir(outDir, { recursive: true });
  const text = await readFile(join(here, "entry.txt"), "utf8");
  if (text.trim().length === 0) {
    throw new Error("entry.txt is empty");
  }
  await writeFile(join(outDir, "entry.txt"), text);
  console.log(`wrote ${text.trim().length} characters to ${join(outDir, "entry.txt")}`);
}

await main();
