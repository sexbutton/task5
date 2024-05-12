export function sortByTitle(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
}
export function sortByRating(a, b) {
  return b.rating - a.rating;
}
