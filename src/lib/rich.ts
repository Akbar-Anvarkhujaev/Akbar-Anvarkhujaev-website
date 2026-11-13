import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import { profile } from "../data/profile";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Turns plain text with $math$ and **bold** into safe HTML. */
export function rich(text: string): string {
  return text
    .split(/(\$[^$]+\$)/g)
    .map((part) =>
      part.startsWith("$") && part.endsWith("$") && part.length > 2
        ? katex.renderToString(part.slice(1, -1), { throwOnError: false })
        : escape(part).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
    )
    .join("");
}

/** True when public/cv.pdf (or whatever profile.cvFile names) exists. */
export const hasCv = () => fs.existsSync(path.join(process.cwd(), "public", profile.cvFile));

/** True when a project file has write-up text below its frontmatter. */
export const hasWriteup = (body?: string) =>
  !!body && body.replace(/<!--[\s\S]*?-->/g, "").trim().length > 0;
