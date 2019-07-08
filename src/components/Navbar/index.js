import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <div className="nav">
      <div className="brand navbar">Clicky Game</div>
      <div className="hint navbar">{props.hint}</div>
      <div className="score navbar">Score: {props.currentScore} | Top Score : {props.topScore}</div>
    </div>);
};

Nav.defaultProps = {
  hint: `Click an image to begin!`,
  currentScore: 0,
  topScore: 0
}

export default Nav; 