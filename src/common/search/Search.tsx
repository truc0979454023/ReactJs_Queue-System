import React from "react";
import "./Search.css";

type SearchProps = {
  width: number;
};

const Search = ({ width }: SearchProps) => {
  return (
    <div style={{ width: `${width}px` }} className="input-container ">
      <span className="material-symbols-outlined search-icon">search</span>

      <input type="text" className="input" placeholder="Nhập từ khóa" />
    </div>
  );
};

export default Search;
