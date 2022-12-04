import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";
import { useParams } from "react-router-dom";
import Moviestatistics from "./Moviestatistics.jsx";
import MovieActor from "./MovieActor.jsx";

// import MoviePlayer from "./MoviePlayer";
import Modal from "./components/Modal";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [Movies, setMovies] = useState([]); // 영화 정보
  const [Video, setVideos] = useState([]);
  const [Actor, setActor] = useState([]); //배우
  const [show, setShow] = React.useState(false); //예고편 모달
  const [isClick, setisClick] = useState(false); //영화 디테일 버튼

  console.log(Movies);
  // console.log(Movies);
  useEffect(() => {
    const movieinfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KOR`;
    fetch(movieinfo)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response);
      });
  }, []);

  useEffect(() => {
    const movieinfo3 = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KOR`;
    fetch(movieinfo3)
      .then((response) => response.json())
      .then((response) => {
        setVideos(response);
      });
  }, []);

  useEffect(() => {
    const movieinfo1 = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KOR​`;
    fetch(movieinfo1)
      .then((response) => response.json())
      .then((response) => {
        setActor(response.cast);
      });
  }, [Movies]);

  //detail 더보기 클릭
  const onSubmit = () => {
    setisClick(!isClick);
  };

  return (
    <div>
      {/* header */}
      {/* body */}
      <div className="detail__wrap">
        <a href="/">
          <div className="go_main">main</div>
        </a>
        {
          <div
            className="detail__img"
            style={{
              backgroundImage: `url(${IMAGE_BASE_URL}w1280/${Movies.backdrop_path})`,
            }}
          ></div>
        }
        <div className="detail__inner">
          <div className="detail__poster">
            <img
              src={`${IMAGE_BASE_URL}w342/${Movies.poster_path}`}
              alt={`${Movies.id}`}
            />
          </div>
          <div className="detail__left">
            <div className="detail__title">{Movies.title}</div>
            <div className="detail__desc__inner">
              <div className="detail__desc">{Movies.overview}</div>
            </div>
            <button className="btn-primary" onClick={() => setShow(true)}>
              예고편보기
            </button>
            <div className="play">
              {Movies && (
                <Modal
                  show={show}
                  onClose={() => setShow(false)}
                  video={Video}
                />
              )}
            </div>
            <button className="detail__more" onClick={onSubmit}>
              더보기
            </button>
            {isClick && <Moviestatistics Movieinfo={Movies} />}
            {/* movie info */}
            <br />
            {/* actor grid */}
            <MovieActor Actors={Actor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
