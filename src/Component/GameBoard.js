import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";

function GameBoard(props) {
  const { sideLength } = props;
  const [tileValueArray, setTileValueArray] = useState([]);

  function twoAtRandom(arr) {
    let idx = Math.floor(Math.random() * arr.length);
    arr[idx] === 0 ? (arr[idx] = 2) : twoAtRandom(arr);
  }

  function generateArray() {
    let array = [];
    for (let i = 0; i < sideLength * sideLength; i++) {
      array.push(0);
    }
    twoAtRandom(array);
    twoAtRandom(array);
    setTileValueArray([...array]);
  }

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="game_board">
      <div className="tile_container">
        {tileValueArray.map((tileValue, idx) => (
          
          <Tile key={idx} value={tileValue} />
        ))}
        <GameOver />
      </div>
    </div>
  );
}

export default GameBoard;
