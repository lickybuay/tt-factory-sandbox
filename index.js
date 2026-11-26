/**
 * Keeps the first `count` words of `text` and adds an ellipsis when anything was cut.
 * Words are runs of non-space characters; runs of whitespace collapse to one space.
 */
export function truncateWords(text, count) {
  if (typeof text !== "string") throw new TypeError("text must be a string");
  if (!Number.isInteger(count) || count < 0) throw new TypeError("count must be a non-negative integer");
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= count) return words.join(" ");
  return `${words.slice(0, count).join(" ")}…`;
}
