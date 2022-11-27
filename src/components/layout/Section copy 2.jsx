import React from "react";

// let API_key = "f89466761449b5afaef84a8fb3c666f9";
let base_url = "https://api.themoviedb.org/3";
let url =
  base_url +
  "/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-kr&query=";
// +API_key;
let arr = ["액션"];
const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        //console.log (data.results);
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "액션") {
      url =
        base_url +
        "/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-kr&query=코미디&page=1&include_adult=false";
    }
    setUrl(url);
  };
  if (movieType == "Theatre") {
    /* value가 a 안의 내용인데 연동 고민 */
  }
  return (
    <section id="category">
      <h2>Category</h2>
      <ul className="category__menu">
        {arr.map((value) => {
          return (
            <li>
              <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
              <a
                href="#"
                name={value}
                onClick={(e) => {
                  getData(e.target.name);
                }}
              >
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Section;
