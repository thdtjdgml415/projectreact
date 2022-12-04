import React from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/Config";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useParams } from "react-router-dom";

const ActorInner = ({ image }) => {
  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}w45/${image?.profile_path}`}
        alt={`${image.name}`}
      />

      <div className="movie__actor__name">{image.name}</div>
    </>
  );
};

const MovieActor = ({ Actors }) => {
  //   const { movieId } = useParams();
  //   const [Movies, setMovies] = useState([]);

  return (
    <div className="movie__actor__inner">
      <div className="movie__actor">
        <h2>Actor</h2>
        <div className="slider__inner">
          <Swiper
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            className="mySwiper"
          >
            {Actors.map((image, key) => (
              <SwiperSlide key={key}>
                <ActorInner image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieActor;
