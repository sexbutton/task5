import { Link } from "react-router-dom";
import styles from "./CardFilm.module.css";
import { useDispatch, useSelector } from "react-redux";

function CardFilm(props) {
  const { id, title, image, short_description, actors, genres, rating } = props;
  const dispatch = useDispatch();
  // РАБОТА С ФИЛЬМАМИ КОТОРЫЕ ХОТЯТ ПОСМОТРЕТЬ ПОЗЖЕ
  const watchedLaterMovies = useSelector(
    (state) => state.watchLater.watchLater
  );
  const watchLaterFilm = (filmId) => {
    return {
      type: "WATCH_LATER_FILM",
      payload: filmId,
    };
  };
  const unwatchLaterFilm = (filmId) => {
    return {
      type: "UNWATCH_LATER_FILM",
      payload: filmId,
    };
  };
  const handleCheckboxClick = (filmId) => {
    if (watchedLaterMovies.includes(filmId)) {
      dispatch(unwatchLaterFilm(filmId));
    } else {
      dispatch(watchLaterFilm(filmId));
    }
  };
  const isLiked = watchedLaterMovies.includes(id);
  // РАБОТА С ИЗБРАННЫМИ ФИЛЬМАМИ
  const favoritesFilm = useSelector((state) => state.favorites.favorites);
  const favoriteFilm = (filmId) => {
    return {
      type: "FAVORITE_FILM",
      payload: filmId,
    };
  };
  const unfavoriteFilm = (filmId) => {
    return {
      type: "UNFAVORITE_FILM",
      payload: filmId,
    };
  };
  const handleFavoriteClick = (filmId) => {
    if (favoritesFilm.includes(filmId)) {
      dispatch(unfavoriteFilm(filmId));
    } else {
      dispatch(favoriteFilm(filmId));
    }
  };
  const isFavorite = favoritesFilm.includes(id);
  return (
    <div id={id} className={styles.container}>
      <Link to={`/film/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="wrapperDesc">
        <Link to={`/film/${id}`}>
          <h3>{title}</h3>
        </Link>

        <p>{short_description}</p>
        <div className={styles.actors}>
          {actors.map((actor, index) => (
            <p key={index}>{actor}</p>
          ))}
        </div>
        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <p key={index}>{genre}</p>
          ))}
        </div>
        <p>{rating}</p>
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input
            checked={isLiked}
            onChange={() => handleCheckboxClick(id)}
            type="checkbox"
          />
          <label>Смотреть позже</label>
        </div>
        <div className={styles.checkbox}>
          <input
            checked={isFavorite}
            onChange={() => handleFavoriteClick(id)}
            type="checkbox"
          />
          <label>Избранное</label>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
