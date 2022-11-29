import React from "react";
import { Descriptions, Badge } from "antd";
import { useParams } from "react-router-dom";
function Moviestatistics({ Movieinfo }) {
  let movies = useParams; // let movie={}; movie=props.movie 랑같은코드
  console.log(Movieinfo);
  return (
    <div className="static__inner">
      <Descriptions title="영화 정보" bordered>
        <Descriptions.Item label="영화 제목">
          {Movieinfo.title}
        </Descriptions.Item>
        <Descriptions.Item label="원제">
          {Movieinfo.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="개봉일">
          {Movieinfo.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="수익">${Movieinfo.revenue}</Descriptions.Item>
        <Descriptions.Item label="러닝타임">
          {Movieinfo.runtime}분
        </Descriptions.Item>
        <Descriptions.Item label="평점" span={2}>
          {Movieinfo.vote_average}점
        </Descriptions.Item>
        <Descriptions.Item label="평점투표횟수">
          {Movieinfo.vote_count}번
        </Descriptions.Item>
        <Descriptions.Item label="개봉유무">
          {Movieinfo.status}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default Moviestatistics;
