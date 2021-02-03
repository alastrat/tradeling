import React, { useEffect, useState } from "react";
import githubLogo from "../../assets/img/github-logo.png";
import "./style.scss";

interface BoxProps {
  inStage?: number;
}

export const Box: React.SFC<BoxProps> = ({ inStage }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(randomColor())
  }, [])

  return (
    <div className="box-container">
      <div className="box-img" style={{ backgroundColor: color }}>
        <img src={githubLogo} alt="octo-logo" />
      </div>
      <div className="box-info">
        <div className="box-info-r1">
          <span >Title</span>
          <span id="stats">Stars</span>
          <span id="stats">Forks</span>
        </div>
        <div className="box-info-r2">
          <span>Author</span>
          <span id="stats">Lenguage</span>
        </div>
        <div className="box-info-r3">
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}