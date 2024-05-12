import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Film from "./pages/Film/Film";
import SearchFilms from "./pages/searchFilms/SearchFilms";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film/:id" element={<Film />}></Route>
        <Route path="/search" element={<SearchFilms />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
