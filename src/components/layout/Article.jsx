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

function Article({ images }) {
  // const [selectMovie, setSelectMovie] = useState("null");
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
          <Popular movie={image} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Article;
