import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const MoviePlayer = ({}) => {
  const [Moviess, setMoviess] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    // let movieimage = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}&language=en-US`;
    // let movieCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let movieinfo = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KOR`;
    fetch(movieinfo)
      .then((response) => response.json())
      .then((response) => {
        setMoviess(response.results[0]);
        console.log(movieinfo);
      });
  }, []);
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${Moviess?.key}`}
      controls
    />
  );
};

export default MoviePlayer;
