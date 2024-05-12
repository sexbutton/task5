import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Main.module.css";
import CardFilm from "../../components/CardFilm/CardFilm";
import Dropdown from "../../components/Dropdown/Dropdown";
import data from "../../api.js";
import { sortByTitle, sortByRating } from "./sorts.js";
import { filterByGenre } from "./filters.js";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu.jsx";

const Main = () => {
  const [movies, setMovies] = useState(data);
  const sorting = useSelector((state) => state.sort.sorting);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    let sortedMovies = [...data];

    if (sorting == "По Названию") {
      sortedMovies.sort(sortByTitle);
    } else if (sorting == "По Рейтингу") {
      sortedMovies.sort(sortByRating);
    } else {
      sortedMovies = data;
    }

    if (filter == "Драма") {
      sortedMovies = filterByGenre(sortedMovies, "Драма");
    } else if (filter == "Комедия") {
      sortedMovies = filterByGenre(sortedMovies, "Комедия");
    } else if (filter == "Биография") {
      sortedMovies = filterByGenre(sortedMovies, "Биография");
    } else if (filter == "Боевик") {
      sortedMovies = filterByGenre(sortedMovies, "Боевик");
    }

    setMovies(sortedMovies);
  }, [sorting, filter]);
  return (
    <>
      <SidebarMenu></SidebarMenu>
      <div className={styles.main}>
        <Dropdown type="sort" />
        <Dropdown type="filter" />
      </div>
      {movies.map((movie) => (
        <CardFilm key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default Main;
