import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../utils/Config";
import Header from "../layout/Header";
import Article from "../layout/Article";
// import Aside from "../layout/Aside";
import Filter from "../layout/Filter.jsx";
function Main() {
  // const [images, setImages] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  const [popular, setPopular] = useState([]);
  const [CurrentPage, setCurrentPage] = useState("0");
  const [filtered, setFiltered] = useState([]);
  // const [selectMovie, setSelectMovie] = useState([]);
  // const [movies, setMovies] = useState([]);
  // 영화 검색
  const search = async (query) => {
    await fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setFiltered(result.results))
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
        setFiltered([...filtered, ...response.results]);
        setCurrentPage(response.page);
      });
    // .then((result) => setImages(result.results))
    // .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchPopular(filtered);
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  //인기영화 불러오기
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
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <Article filtered={filtered} />
        <button className="more" onClick={loadMoreItems}>
          Load More
        </button>
      </div>
    </div>
  );
}
export default Main;
