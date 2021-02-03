import React from "react";
import "./style.scss";

interface SelectorProps {
  inStage?: number;
}

export const Selector: React.SFC<SelectorProps> = ({ inStage }) => {
  return (
    <div className="selector-container">
      <button type="submit">
        USERS
      </button>
    </div>
  );
};