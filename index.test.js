import assert from "node:assert/strict";
import { test } from "node:test";
import { truncateWords } from "./index.js";

test("keeps the first words and marks the cut", () => {
  assert.equal(truncateWords("The quick brown fox jumps", 3), "The quick brown…");
  assert.equal(truncateWords("The quick brown fox jumps", 3, {}), "The quick brown…");
  assert.equal(truncateWords("The quick brown fox jumps", 3, { ellipsis: "..." }), "The quick brown...");
  assert.equal(truncateWords("The quick brown fox jumps", 3, { ellipsis: "" }), "The quick brown");
});

test("leaves short text whole, with whitespace collapsed", () => {
  assert.equal(truncateWords("  one   two ", 5), "one two");
  assert.equal(truncateWords("  one   two ", 5, { ellipsis: "..." }), "one two");
});

test("refuses arguments of the wrong type", () => {
  assert.throws(() => truncateWords("a b", -1), TypeError);
  assert.throws(() => truncateWords("a b", 1.5), TypeError);
  assert.throws(() => truncateWords("a b", 1, { ellipsis: null }), TypeError);
  assert.throws(() => truncateWords("a b", 1, { ellipsis: 3 }), TypeError);
});
