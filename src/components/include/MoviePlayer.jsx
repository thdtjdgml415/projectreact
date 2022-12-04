import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Modal from "./components/Modal";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MoviePlayer = ({}) => {
  const [Moviess, setMoviess] = useState([]);
  const { movieId } = useParams();
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    const movieinfo = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KOR`;
    fetch(movieinfo)
      .then((response) => response.json())
      .then((response) => {
        setMoviess(response.results[0]);
        // console.log(movieinfo);
      });
  }, []);

  return (
    <div class="play">
      <Modal show={show} onClose={() => setShow(false)}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${Moviess?.key}`}
          controls
        />
      </Modal>
    </div>
  );
};

export default MoviePlayer;
