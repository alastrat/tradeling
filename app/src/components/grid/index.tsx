import React from "react";
import { Box } from "../box";
import "./style.scss";

interface GridProps {
  inStage?: number;
}

export const Grid: React.SFC<GridProps> = ({ inStage }) => {
  return (
    <div className="grid-container">
      {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((x, i) => (
        <Box key={`grid-element-${i}`} />
      ))}
    </div>
  );
};