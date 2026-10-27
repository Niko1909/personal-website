import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readPage = (path) => readFileSync(new URL(`../dist/${path}/index.html`, import.meta.url), "utf8");

test("homepage illustration has 64 squares and an example LC0 target in centipawns", () => {
  const html = readPage(".");
  const board = html.match(/<div class="mini-board"[^>]*>(.*?)<\/div>/s)?.[1];
  assert(board, "Chess illustration is rendered");
  assert.equal([...board.matchAll(/<span\b/g)].length, 64);
  assert.equal([...board.matchAll(/<img\b/g)].length, 32);
  assert.match(html, /Example LC0 evaluation/);
  assert.match(html, /\+37 cp/);
  assert.match(html, /Student target/);
  assert.match(html, /aria-label="Illustrative LC0 evaluation of \+37 centipawns used as a student training target"/);
});

test("chart ticks and dots share the 200–235 numeric scale", () => {
  const html = readPage("work/distilling-chess-intelligence");
  const ticks = [...html.matchAll(/<span style="left:([\d.]+)%"[^>]*>(\d+)<\/span>/g)];
  assert.equal(ticks.length, 5);
  for (const [, percent, value] of ticks) {
    assert(Math.abs(Number(percent) - (Number(value) - 200) / 35 * 100) < 0.001);
  }
  const dots = [...html.matchAll(/--position:([\d.]+)%/g)];
  const values = [205.10, 219.55, 232.96, 219.67, 215.06, 206.73, 210.03, 215.16, 209.60];
  assert.equal(dots.length, values.length);
  dots.forEach(([, percent], index) => assert(Math.abs(Number(percent) - (values[index] - 200) / 35 * 100) < 0.001));
});

test("each page has a skip link before its header and a focusable main target", () => {
  for (const route of [".", "work/distilling-chess-intelligence", "work/intracranial-hemorrhage-detection"]) {
    const html = readPage(route);
    assert.match(html, /<a class="skip-link" href="#top"[^>]*>Skip to main content<\/a>/);
    assert.match(html, /<main\b[^>]*id="top"[^>]*tabindex="-1"/);
    assert(html.indexOf('class="skip-link"') < html.indexOf("<header"));
  }
});
