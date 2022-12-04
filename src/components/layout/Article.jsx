import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/Config";

const Popular = ({ movie }) => {
  return (
    <div className="movie__card">
      <div className="image__inner">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`${IMAGE_BASE_URL}w300/${movie.poster_path}`}
            alt={`${movie.id}`}
          />
        </Link>
      </div>
      <p className="movie__title">{movie.title}</p>
      <em className="movie__year">{movie.release_date}</em>
    </div>
  );
};
function Article({ filtered }) {
  // console.log(filtered);
  return (
    <section id="popular">
      <h2>What's</h2>
      <div className="movie__wrap">
        {filtered?.map((image, idx) => (
          <Popular movie={image} key={idx} />
        ))}
      </div>
    </section>
  );
}
export default Article;
