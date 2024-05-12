import styles from "./SidebarMenu.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../api.js";

const SidebarMenu = () => {
  const favoritesFilm = useSelector((state) => state.favorites.favorites);
  const watchLaterFilm = useSelector((state) => state.watchLater.watchLater);

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Link to="/">На главную</Link>
        <Link to="/search">Найти фильм</Link>
      </div>
      <h3>Избранное</h3>
      <div className={styles.favorites}>
        {data.map((movie) => {
          if (favoritesFilm.includes(movie.id)) {
            return (
              <Link to={`/film/${movie.id}`}>
                <h5>{movie.title}</h5>
              </Link>
            );
          }
        })}
      </div>
      <h3>Смотреть позже</h3>
      <div className={styles.watchLater}>
        {data.map((movie) => {
          if (watchLaterFilm.includes(movie.id)) {
            return (
              <Link to={`/film/${movie.id}`}>
                <h5>{movie.title}</h5>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;
