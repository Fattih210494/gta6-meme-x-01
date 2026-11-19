// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all the program
// has to do. The entry is the post itself: the meme (meme.png in this repository) is
// posted on X from a public account with make.fun (a link or written out) and/or a tag
// of @makefunai and the entrant's play code in its text, POST.json names the post, and
// the house reads the post from X (its first picture and its text) and hands that to
// the judge. Nothing this program writes about the post is judged.
//
// The POST.json shipped here holds a placeholder address, so the gate refuses it as it
// stands. Replace it with the post's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The post's address must be a real, live X post — never the starter placeholder.
// A bad address would make the gate read a post that does not exist, so refuse
// to copy anything until POST.json proves it names one.
const POST_PATH = join(BOT_DIR, 'POST.json');
const X_POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+\/?$/;

function fail(message: string): never {
  console.error(`POST.json is not a valid post address: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(POST_PATH, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`not valid JSON (${(err as Error).message})`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.length === 0) {
  fail('missing a string "url" field');
}
if (url.includes('<handle>') || url.includes('<id>')) {
  fail(`still holds the placeholder address ${JSON.stringify(url)} — replace it with the live post's address`);
}
if (!X_POST_URL.test(url)) {
  fail(`"url" is not an X post address (expected https://x.com/<handle>/status/<id>): ${JSON.stringify(url)}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
