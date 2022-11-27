import React, { useEffect } from "react";

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {
  console.log(activeGenre);
  console.log(setActiveGenre);
  useEffect(() => {
    if (activeGenre?.length === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    console.log(filtered);
    console.log(setActiveGenre);

    setActiveGenre(filtered);
  }, [setActiveGenre, setFiltered, popular]);

  return (
    <section id="category">
      <h2>Category</h2>
      <ul className="category__menu">
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a onClick={() => setActiveGenre(0)} href="/">
            우울한 당신에게 어울리는 영화
          </a> */}
          <button onClick={() => setActiveGenre(35)}>
            우울한 당신에게 어울리는 영화
          </button>
        </li>
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a href="/">기쁜 당신에게 어울리는 영화</a> */}
          <button onClick={() => setActiveGenre(18)}>
            기쁜 당신에게 어울리는 영화
          </button>
        </li>
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a href="/">힘든 사회에 지친 당신에게 어울리는 영화</a> */}
          <button onClick={() => setActiveGenre(14)}>
            힘든 사회에 지친 당신에게 어울리는 영화
          </button>
        </li>
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a href="/">자존감이 다친 사람에게 어울리는 영화</a> */}
          <button onClick={() => setActiveGenre(120)}>
            자존감이 다친 사람에게 어울리는 영화
          </button>
        </li>
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a href="/">용기가 필요할때 추천하는 영화화</a> */}
          <button onClick={() => setActiveGenre(12)}>
            용기가 필요할때 추천하는 영화
          </button>
        </li>
        <li>
          <img src="/assets/img/Categry1.jpg" alt="카테고리 이미지" />
          {/* <a href="/">인생에 대한 고민이 필요할때 좋은 영화</a> */}
          <button onClick={() => setActiveGenre(36)}>
            인생에 대한 고민이 필요할때 좋은 영화
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Filter;

// {
//     "id": 28,
//     "name": "액션"
// },
// {
//     "id": 12,
//     "name": "모험"
// },
// {
//     "id": 16,
//     "name": "애니메이션"
// },
// {
//     "id": 35,
//     "name": "코미디"
// },
// {
//     "id": 80,
//     "name": "범죄"
// },
// {
//     "id": 99,
//     "name": "다큐멘터리"
// },
// {
//     "id": 18,
//     "name": "드라마"
// },
// {
//     "id": 10751,
//     "name": "가족"
// },
// {
//     "id": 14,
//     "name": "판타지"
// },
// {
//     "id": 36,
//     "name": "역사"
// },
// {
//     "id": 27,
//     "name": "공포"
// },
// {
//     "id": 10402,
//     "name": "음악"
// },
// {
//     "id": 9648,
//     "name": "미스터리"
// },
// {
//     "id": 10749,
//     "name": "로맨스"
// },
// {
//     "id": 878,
//     "name": "SF"
// },
// {
//     "id": 10770,
//     "name": "TV 영화"
// },
// {
//     "id": 53,
//     "name": "스릴러"
// },
// {
//     "id": 10752,
//     "name": "전쟁"
// },
// {
//     "id": 37,
//     "name": "서부"
// }
