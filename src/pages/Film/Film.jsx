import { useParams } from "react-router-dom";
import styles from "./Film.module.css";
import data from "../../api.js";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu.jsx";
import { useState } from "react";

const Film = () => {
  const { id } = useParams();
  const desiredMovie = data.find((movie) => movie.id === parseInt(id));

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(desiredMovie.comments);
  const addComment = () => {
    setComments((prevComments) => [
      ...prevComments,
      { id: prevComments.length + 1, text: comment },
    ]);
    setComment(""); // Очистка поля ввода после добавления комментария
  };

  return (
    <>
      <SidebarMenu></SidebarMenu>
      <div className={styles.main}>
        <h1>{desiredMovie.title}</h1>
        <img src={desiredMovie.image} alt="" />
        <p className={styles.description}>{desiredMovie.full_description}</p>

        <div className={styles.actors}>
          <h3>Актеры:</h3>
          {desiredMovie.actors.map((actor) => (
            <p key={actor}>{actor}</p>
          ))}
        </div>
        <div className={styles.genres}>
          <h3>Жанры:</h3>
          {desiredMovie.genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>
        <p>{desiredMovie.rating}</p>
      </div>
      <div className={styles.comments}>
        <h3>Комментарии:</h3>
        {comments.length ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h4>Анонимный пользователь</h4>
              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p>Нет комментариев</p>
        )}
        <div className={styles.addComment}>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Добавить комментарий"
            value={comment}
          />

          <button onClick={addComment}>Отправить</button>
        </div>
      </div>
    </>
  );
};

export default Film;
