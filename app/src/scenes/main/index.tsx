import React from "react";
import "./style.scss";
import { Grid, Header, SearchBar, Selector } from "../../components";

const Main = () => {
  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
        <form className="search-container" onSubmit={() => alert('submitted')}>
          <SearchBar />
          <Selector />
        </form>
      </div>
      <div className="content-container">
        <Grid />
      </div>
      <footer className="footer-container"> Source code available on <a href="https://github.com/alastrat/tradeling" target="_blank"> Github</a>.</footer>
    </div>
  );
};

export default Main;