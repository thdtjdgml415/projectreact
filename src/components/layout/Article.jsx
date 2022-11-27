import React, { useEffect, useState } from "react";

import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";
const Popular = ({ images, setSelectMovie }) => {
  const onclick = () => {
    setSelectMovie(images.id);
  };

  return (
    <div className="movie__card">
      <div className="image__inner">
        <img
          src={`${IMAGE_BASE_URL}w300/${images.poster_path}`}
          alt={`${images.id}`}
          onClick={onclick}
        />
      </div>
      <p className="movie__title">{images.title}</p>
      <em className="movie__year">{images.release_date}</em>
    </div>
  );
};

function Article({ images }) {
  const [selectMovie, setSelectMovie] = useState("null");
  // const [previewMovie, setpreviewMovie] = useState("null");

  // 영화 선택 불러오는 api
  // useEffect(() => {
  //   fetch(
  //     `
  //     ${API_URL}movie/${selectMovie}/videos?api_key=${API_KEY}&language=ko-kor`
  //   )
  //     .then((response) => response.json())
  //     // .then((result) => console.log(result))
  //     .then((result) => setpreviewMovie(result.results))
  //     .catch((error) => console.log(error));
  // }, [selectMovie]);

  return (
    <section id="popular">
      <h2>What's Popular</h2>
      <div className="movie__wrap">
        {images.map((image, idx) => (
          <Popular setSelectMovie={setSelectMovie} images={image} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Article;
