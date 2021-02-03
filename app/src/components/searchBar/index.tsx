import React from "react";
import "./style.scss";

interface SearchBarProps {
  searchTerm?: string;
}

export const SearchBar: React.SFC<SearchBarProps> = ({ searchTerm }) => {
  return (
    <div className="searchBar-container">
      <input type="text"/>
    </div>
  );
};