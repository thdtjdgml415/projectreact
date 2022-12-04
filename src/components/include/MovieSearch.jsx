import React, { useRef } from "react";
const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <input
        ref={inputRef}
        className="header__search"
        type="text"
        placeholder="영화를 검색해주세요!"
        onKeyPress={onKeyPress}
      />
    </>
  );
};
export default MovieSearch;
