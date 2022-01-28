import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";
import handleKeyEvent from "../Utils/handleKeyEvent";
import { twoAtRandom } from "../Utils/randomNumber";
import { v4 as uuidv4 } from "uuid";

function GameBoard(props) {
	const { sideLength } = props;
	const [tileValueArray, setTileValueArray] = useState([]);

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
	}

	// Initializing the Array
	useEffect(() => {
		generateArray();
	}, []);

	// Handling Keydown Events
	useEffect(() => {
		window.addEventListener("keydown", handleKeyEvent);
		return function cleanup() {
			window.removeEventListener("keydown", handleKeyEvent);
		};
	});
	return (
		<div className="game_board">
			<div className="tile_container">
				{tileValueArray.map((row) => {
					return row.map((tileValue) => {
						return <Tile key={uuidv4()} value={tileValue} />;
					});
				})}
				<GameOver />
			</div>
		</div>
	);
}

export default GameBoard;
