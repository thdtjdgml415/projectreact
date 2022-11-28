import React from "react";
import { Descriptions, Badge } from "antd";
import { useParams } from "react-router-dom";
function Moviestatistics({ Movieinfo }) {
  let movies = useParams; // let movie={}; movie=props.movie 랑같은코드
  console.log(Movieinfo);
  return (
    <div className="static__inner">
      <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{Movieinfo.title}</Descriptions.Item>
        <Descriptions.Item label="release_date">
          {Movieinfo.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="revenue">
          {Movieinfo.revenue}
        </Descriptions.Item>
        <Descriptions.Item label="runtime">
          {Movieinfo.runtime}
        </Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2}>
          {Movieinfo.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">
          {Movieinfo.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="status">{Movieinfo.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">
          {Movieinfo.popularity}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default Moviestatistics;
