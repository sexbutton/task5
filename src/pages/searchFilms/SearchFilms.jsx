import styles from "./SearchFilms.module.css";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import data from "../../api.js";
import { useState } from "react";
import CardFilm from "../../components/CardFilm/CardFilm.jsx";
import { useEffect } from "react";

const SearchFilms = () => {
  const [movies, setMovies] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  // СОСТОЯНИЯ ЖАНРОВ
  const [comedy, setComedy] = useState(false);
  const [drama, setDrama] = useState(false);
  const [biography, setBiography] = useState(false);
  const [crime, setCrime] = useState(false);
  const [action, setAction] = useState(false);

  const handleComedyChange = (e) => {
    setComedy(e.target.checked);
  };
  const handleDramaChange = (e) => {
    setDrama(e.target.checked);
  };
  const handleBiographyChange = (e) => {
    setBiography(e.target.checked);
  };
  const handleCrimeChange = (e) => {
    setCrime(e.target.checked);
  };
  const handleActionChange = (e) => {
    setAction(e.target.checked);
  };
  useEffect(() => {
    let sortedMovies = [...data];

    const anyGenreSelected = () => {
      return comedy || drama || biography || crime || action;
    };

    if (anyGenreSelected()) {
      sortedMovies = sortedMovies.filter((movie) => {
        return (
          (!comedy || movie.genres.includes("Комедия")) &&
          (!drama || movie.genres.includes("Драма")) &&
          (!biography || movie.genres.includes("Биография")) &&
          (!crime || movie.genres.includes("Криминал")) &&
          (!action || movie.genres.includes("Боевик"))
        );
      });
    }

    if (!anyGenreSelected()) {
      sortedMovies = data;
    }

    setMovies(sortedMovies);
  }, [comedy, drama, biography, crime, action]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <SidebarMenu></SidebarMenu>
      <div className={styles.main}>
        <input
          placeholder="Введите название фильма"
          onChange={handleSearchInputChange}
          type="search"
        />
        <div className={styles.dividers}>
          <input
            onChange={handleActionChange}
            type="checkbox"
            name="Боевик"
            id=""
          />
          <label htmlFor="Боевик">Боевик</label>
          <input
            onChange={handleCrimeChange}
            type="checkbox"
            name="Криминал"
            id=""
          />
          <label htmlFor="Криминал">Криминал</label>
          <input
            onChange={handleComedyChange}
            type="checkbox"
            name="Комедия"
            id=""
          />
          <label htmlFor="Боевик">Комедия</label>
          <input
            onChange={handleDramaChange}
            type="checkbox"
            name="Драма"
            id=""
          />
          <label htmlFor="Боевик">Драма</label>
          <input
            onChange={handleBiographyChange}
            type="checkbox"
            name="Биография"
            id=""
          />
          <label htmlFor="Боевик">Биография</label>
        </div>
        <div className={styles.films}>
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((movie) => (
              <CardFilm key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchFilms;
