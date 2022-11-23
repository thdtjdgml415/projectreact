import React from "react";

const Popular = ({ images }) => {
  return (
    <div className="movie__card">
      <div className="image__inner">
        <img
          src={`https://image.tmdb.org/t/p/w300/${images.poster_path}`}
          alt={`${images.title}`}
        />
      </div>
      <p className="movie__title">{images.title}</p>
      <em className="movie__year">{images.release_date}</em>
    </div>
  );
};

function Article({ images }) {
  return (
    <section id="popular">
      <h2>What's Popular</h2>
      <div className="movie__wrap">
        {images.map((image, idx) => (
          <Popular images={image} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Article;
