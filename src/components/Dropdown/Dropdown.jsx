import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  const dispatch = useDispatch();

  if (props.type == "filter") {
    const options = ["Драма", "Комедия", "Боевик", "Биография"];
    const title = "Фильтр:";

    const filter = useSelector((state) => state.filter.filter);
    const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      // Отправляем действие в Redux для обновления значения сортировки
      dispatch({ type: "FILTER_FILMS", payload: selectedValue });
    };

    return (
      <div className={styles.container}>
        <h3>{title}</h3>
        <select value={filter} onChange={handleSelectChange}>
          <option value="">По умолчанию</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (props.type == "sort") {
    const title = "Сортировка:";
    const options = ["По Названию", "По Рейтингу"];

    const sorting = useSelector((state) => state.sort.sorting);
    const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      // Отправляем действие в Redux для обновления значения сортировки
      dispatch({ type: "SORT_FILMS", payload: selectedValue });
    };

    return (
      <div className={styles.container}>
        <h3>{title}</h3>
        <select value={sorting} onChange={handleSelectChange}>
          <option value="">По умолчанию</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default Dropdown;
