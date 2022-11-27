import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Filter from "../layout/Filter";
import Aside from "../layout/Aside";
import Article from "../layout/Article";

function Main() {
  const [popular, setPopular] = useState([]);
  const [images, setImages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState();
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  console.log(activeGenre);
  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setFiltered(result.results))
      .catch((error) => console.log(error));
  };

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);

    setFiltered(movies.results);
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1`
  //   )
  //     .then((response) => response.json())
  //     // .then((result) => console.log(result))
  //     .then((result) => setImages(result.results))
  //     .then((result) => setfiltered(movies.results);
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="wrap">
      <div className="left">
        <Header onSearch={search} />
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <Article filtered={filtered} />
      </div>
      <Aside />
    </div>
  );
}

export default Main;
