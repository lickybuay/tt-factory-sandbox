import assert from "node:assert/strict";
import { test } from "node:test";
import { truncateWords } from "./index.js";

test("keeps the first words and marks the cut", () => {
  assert.equal(truncateWords("The quick brown fox jumps", 3), "The quick brown…");
});

test("leaves short text whole, with whitespace collapsed", () => {
  assert.equal(truncateWords("  one   two ", 5), "one two");
});

test("refuses a count that is not a non-negative integer", () => {
  assert.throws(() => truncateWords("a b", -1), TypeError);
  assert.throws(() => truncateWords("a b", 1.5), TypeError);
});
