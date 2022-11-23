import React from "react";
import MovieSearch from "../include/MovieSearch";

const Header = ({ onSearch }) => {
  return (
    <div id="header">
      <h1>
        <img src="../assets/img/logo.png" alt="logo" />
      </h1>
      <MovieSearch onSearch={onSearch} />
    </div>
  );
};

export default Header;
