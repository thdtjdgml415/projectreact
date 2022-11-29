import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";
import { useParams } from "react-router-dom";
import Moviestatistics from "./Moviestatistics.jsx";
import ReactPlayer from "react-player";
import MoviePlayer from "./MoviePlayer";

function MovieDetails() {
  const { movieId } = useParams();
  const [Movies, setMovies] = useState([]);
  const [Moviess, setMoviess] = useState([]);
  console.log(Moviess);
  useEffect(() => {
    // let movieimage = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}&language=en-US`;
    // let movieCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let movieinfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KOR`;
    fetch(movieinfo)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response);
        console.log(movieinfo);
      });
  }, []);

  return (
    <div>
      {/* header */}

      {/* body */}
      <div className="detail__img">
        <img
          src={`${IMAGE_BASE_URL}w1280/${Movies.backdrop_path}`}
          alt={`${Movies.id}`}
        />
        <div className="detail__title">{Movies.title}</div>
        <div className="detail__desc">{Movies.overview}</div>
        <div className="play">
          <MoviePlayer>
            <ReactPlayer movieId={movieId} Movies={Movies} />
          </MoviePlayer>
        </div>

        {/* movie info */}
        <Moviestatistics Movieinfo={Movies} />
        <br />
        {/* actor grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2" }}
        ></div>
      </div>
    </div>
  );
}

export default MovieDetails;
