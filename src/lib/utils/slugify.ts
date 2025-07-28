export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove invalid chars
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-"); // Collapse dashes
}
