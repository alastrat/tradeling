import React from "react";
import githubLogo from "../../assets/img/github-logo.png";
import "./style.scss";

export const Header: React.SFC<{}> = () => {
  return (
    <div className="header-main">
      <div className="header-logo">
        <img src={githubLogo} alt="octo-logo" />
      </div>
      <div className="header-content">
        <span className="header-content-title">GitHub Searcher</span>
        <span className="header-content-description">Search users or repositories below</span>
      </div>
    </div>
  );
};