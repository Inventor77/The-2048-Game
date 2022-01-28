import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";
import handleKeyEvent from "../Utils/handleKeyEvent";

function GameBoard(props) {
	const { sideLength } = props;
	const [tileValueArray, setTileValueArray] = useState([]);

	// Function for generating a number 2 at Random Places
	function twoAtRandom(arr) {
		let idx = Math.floor(Math.random() * arr.length);
		arr[idx] === 0 ? (arr[idx] = 2) : twoAtRandom(arr);
	}
	// Function for generating a number 4 at Random Places
	function fourAtRandom(arr) {
		let idx = Math.floor(Math.random() * arr.length);
		arr[idx] === 0 ? (arr[idx] = 4) : fourAtRandom(arr);
	}

	// Initialize Array on Load/Refresh
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

	useEffect(() => {
		window.addEventListener("keydown", handleKeyEvent);
		return function cleanup() {
			window.removeEventListener("keydown", handleKeyEvent);
		};
	});
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
