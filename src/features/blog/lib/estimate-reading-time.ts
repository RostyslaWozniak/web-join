export function estimateReadingTime(content: string | null) {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min czytania`;
}
