import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Article from "../layout/Article";
import Aside from "../layout/Aside";
import { API_KEY, API_URL } from "../../utils/Config";

function Main() {
  const [images, setImages] = useState([]);
  const [CurrentPage, setCurrentPage] = useState("0");
  // const [selectMovie, setSelectMovie] = useState([]);

  // const [movies, setMovies] = useState([]);

  // 영화 검색
  const search = async (query) => {
    await fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  // 영화 인기순위 불러오는 api
  useEffect(() => {
    const fetchPopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KOR&page=1`;
    fetchMovies(fetchPopular);
  }, []);

  const fetchMovies = (fetchPopular) => {
    fetch(fetchPopular)
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((response) => {
        setImages([...images, ...response.results]);
        setCurrentPage(response.page);
      });
    // .then((result) => setImages(result.results))
    // .catch((error) => console.log(error));
  };

  //영화 더보기
  const loadMoreItems = () => {
    const fetchPopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KOR&page=${
      CurrentPage + 1
    }`;
    fetchMovies(fetchPopular);
  };

  return (
    <div className="wrap">
      <div className="left">
        <Header onSearch={search} />
        <Section />
        <Article images={images} />
        <button onClick={loadMoreItems}>Load More</button>
      </div>
      <Aside />
    </div>
  );
}

export default Main;
