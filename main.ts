import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

function checkLine(text: string): string {
  const line = text.replace(/\r\n?/g, "\n").trim();
  if (line.length === 0) throw new Error("entry.txt is empty");
  if (line.length > 200) throw new Error(`line is ${line.length} chars, over the 200 limit`);
  if (line.includes("\n")) throw new Error("entry must be a single line");
  return line;
}

async function main(): Promise<void> {
  const raw = await readFile(path.join(here, "entry.txt"), "utf8");
  const line = checkLine(raw);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.argv[2] ?? "/output";
  await mkdir(outDir, { recursive: true });
  const dest = path.join(outDir, "entry.txt");
  await writeFile(dest, line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to ${dest}`);
}

await main();
