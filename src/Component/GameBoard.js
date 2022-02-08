import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";
import { twoAtRandom } from "../Utils/randomNumber";
import { v4 as uuidv4 } from "uuid";

import {
	onLeftKeyPressed,
	onRightKeyPressed,
	onUpKeyPressed,
	onDownKeyPressed,
} from "../Utils/onKeyPressed";

function GameBoard(props) {
	const { sideLength, changeScore, newGame } = props;
	const [tileValueArray, setTileValueArray] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	// Function to initialize Array on Load/Refresh
	function generateArray() {
		let array = [];
		for (let i = 0; i < sideLength; i++) {
			let row = [];
			for (let j = 0; j < sideLength; j++) {
				row.push(0);
			}
			array.push(row);
		}
		twoAtRandom(array);
		twoAtRandom(array);
		setTileValueArray(array);
		changeScore(0);
	}

	// Initializing the Array
	useEffect(() => {
		generateArray();
	}, [newGame, sideLength]);

	function setArray(arr, bool, score) {
		setTileValueArray(arr);
		setGameOver(bool);
		changeScore(score);
	}
	function playAgain(bool) {
		setGameOver(bool);
	}

	const left = 37;
	const up = 38;
	const right = 39;
	const down = 40;

	function handleKeyEvent(event) {
		if (gameOver) {
			return;
		}
		switch (event.keyCode) {
			case left:
				onLeftKeyPressed(tileValueArray, setArray);
				break;
			case up:
				onUpKeyPressed(tileValueArray, setArray);
				break;
			case right:
				onRightKeyPressed(tileValueArray, setArray);
				break;
			case down:
				onDownKeyPressed(tileValueArray, setArray);
				break;
			default:
				break;
		}
	}

	// Handling Keydown Events
	useEffect(() => {
		window.addEventListener("keydown", handleKeyEvent);
		return function cleanup() {
			window.removeEventListener("keydown", handleKeyEvent);
		};
	});

	return (
		<div className="game_board">
			<div className={`tile_container ${sideLength === 8 ? " for_64" : ""}`}>
				{tileValueArray.map((row) => {
					return row.map((tileValue) => {
						return (
							<Tile key={uuidv4()} value={tileValue} sideLength={sideLength} />
						);
					});
				})}
			</div>
			{gameOver ? (
				<GameOver tryAgain={generateArray} playAgain={playAgain} />
			) : (
				""
			)}
		</div>
	);
}

export default GameBoard;
