import React from "react";

function Moviestatistics({ Movieinfo }) {
  console.log(Movieinfo);
  return (
    <div className="static__inner">
      <div title="영화 정보">
        <div className="Movie__detail__Maintitle" label="원제">
          원제 : {Movieinfo.original_title}
        </div>
        <div className="Movie__detail__open" label="개봉일">
          개봉일 : {Movieinfo.release_date}
        </div>
        <div className="Movie__detail__warn" label="수익">
          수익 : {Movieinfo.revenue}
        </div>
        <div className="Movie__detail__running" label="러닝타임">
          Running Time : {Movieinfo.runtime}분
        </div>
        <div className="Movie__detail__point" label="평점" span={2}>
          평점 : {Movieinfo.vote_average}점
        </div>
        <div label="개봉유무">개봉 유무 : {Movieinfo.status}</div>
      </div>
    </div>
  );
}

export default Moviestatistics;
