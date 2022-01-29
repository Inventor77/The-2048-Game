import React from "react";

function GameOver() {
  return (
    <div className="gameOver_container">
      <span className="message">Game over!</span>
      <div className="btn_container">
        <button className="action_btn">Try again</button>
      </div>
    </div>
  );
}

export default GameOver;
