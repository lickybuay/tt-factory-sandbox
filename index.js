/**
 * Keeps the first `count` words of `text` and adds an ellipsis when anything was cut.
 * Words are runs of non-space characters; runs of whitespace collapse to one space.
 * `options.ellipsis` replaces the default "…"; an empty string adds nothing.
 */
export function truncateWords(text, count, { ellipsis = "…" } = {}) {
  if (typeof text !== "string") throw new TypeError("text must be a string");
  if (!Number.isInteger(count) || count < 0) throw new TypeError("count must be a non-negative integer");
  if (typeof ellipsis !== "string") throw new TypeError("ellipsis must be a string");
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= count) return words.join(" ");
  return `${words.slice(0, count).join(" ")}${ellipsis}`;
}
