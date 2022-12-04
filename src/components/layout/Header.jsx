import React from "react";
import MovieSearch from "../include/MovieSearch";
const Header = ({ onSearch }) => {
  return (
    <div id="header">
      <h1>
        <a href="/">
          <img src="../assets/img/logo.png" alt="logo" />
        </a>
      </h1>
      <MovieSearch onSearch={onSearch} />
    </div>
  );
};
export default Header;
