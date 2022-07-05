import React from "react";
import { Paper } from "@mui/material";
import "components/PaperLayout/PaperLayout.css";

interface Props {
  children: React.ReactNode;
}

const PaperLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Paper className="paper">{children}</Paper>
    </div>
  );
};

export default PaperLayout;
