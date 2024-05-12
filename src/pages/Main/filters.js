export function filterByGenre(movies, genre) {
  return movies.filter((movie) => movie.genres.includes(genre));
}
