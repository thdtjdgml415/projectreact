import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Aside from "../layout/Aside";
import Article from "../layout/Article";

function Main() {
  const [images, setImages] = useState([]);
  // const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="wrap">
      <div className="left">
        <Header onSearch={search} />
        <Section />
        <Article images={images} />
      </div>
      <Aside />
    </div>
  );
}

export default Main;
