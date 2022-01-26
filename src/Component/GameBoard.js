import React from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";

function GameBoard() {
  return (
    <div className="game_board">
      <div className="tile_container">
        <Tile />
        <GameOver />
      </div>
    </div>
  );
}

export default GameBoard;
