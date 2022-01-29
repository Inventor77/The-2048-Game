import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import GameOver from "./GameOver";
// import handleKeyEvent from "../Utils/handleKeyEvent";
import { twoAtRandom } from "../Utils/randomNumber";
import { v4 as uuidv4 } from "uuid";

///////////////////////
import { addElements } from "../Utils/addElements";
import { transpose } from "../Utils/Transpose";
import { conditionalRandomNumber } from "../Utils/conditionalRandomNumber";
//////////////////////

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

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Function invoked on Left Key Pressed
	function onLeftKeyPressed(array) {
		let clone = array;
		// let clone = [
		// 	[0, 0, 4, 4],
		// 	[4, 3, 0, 4],
		// 	[2, 2, 2, 2],
		// 	[2, 2, 2, 0],
		// ];
		let newClone = clone.map((row) => {
			let noZeroElements = addElements(
				row.filter((elem) => elem),
				true
			);
			let zeroElements = [];
			for (let i = 0; i < row.length - noZeroElements.length; i++)
				zeroElements.push(0);
			return noZeroElements.concat(zeroElements);
		});
		newClone = conditionalRandomNumber(newClone);
		console.log("left", newClone);
		setTileValueArray(newClone);
	}

	// Function invoked on Right Key Pressed
	function onRightKeyPressed(array) {
		let clone = array;
		// let clone = [
		// 	[0, 0, 4, 4],
		// 	[4, 3, 0, 4],
		// 	[2, 2, 2, 2],
		// 	[2, 2, 2, 0],
		// ];
		let newClone = clone.map((row) => {
			let noZeroElements = addElements(
				row.filter((elem) => elem),
				false
			);
			let zeroElements = [];
			for (let i = 0; i < row.length - noZeroElements.length; i++)
				zeroElements.push(0);
			return zeroElements.concat(noZeroElements);
		});
		newClone = conditionalRandomNumber(newClone);
		console.log("right", newClone);
		setTileValueArray(newClone);
	}

	// Function invoked on Up Key Pressed
	function onUpKeyPressed(array) {
		let clone = array;
		// let clone = [
		// 	[0, 0, 4, 4],
		// 	[4, 3, 0, 4],
		// 	[2, 2, 2, 2],
		// 	[2, 2, 2, 0],
		// ];

		// [0, 4, 2, 2]
		// [0, 3, 2, 2]
		// [4, 0, 2, 2]
		// [4, 4, 2, 0]

		clone = transpose(clone);
		let newClone = clone.map((row) => {
			let noZeroElements = addElements(
				row.filter((elem) => elem),
				true
			);
			let zeroElements = [];
			for (let i = 0; i < row.length - noZeroElements.length; i++)
				zeroElements.push(0);
			return noZeroElements.concat(zeroElements);
		});
		newClone = transpose(newClone);
		newClone = conditionalRandomNumber(newClone);
		console.log("up", newClone);
		setTileValueArray(newClone);
	}

	// Function invoked on Down Key Pressed
	function onDownKeyPressed(array) {
		let clone = array;
		// let clone = [
		// 	[0, 0, 4, 4],
		// 	[4, 3, 0, 4],
		// 	[2, 2, 2, 2],
		// 	[2, 2, 2, 0],
		// ];

		// [0, 4, 2, 2]
		// [0, 3, 2, 2]
		// [4, 0, 2, 2]
		// [4, 4, 2, 0]

		clone = transpose(clone);
		let newClone = clone.map((row) => {
			let noZeroElements = addElements(
				row.filter((elem) => elem),
				false
			);
			let zeroElements = [];
			for (let i = 0; i < row.length - noZeroElements.length; i++)
				zeroElements.push(0);
			return zeroElements.concat(noZeroElements);
		});
		newClone = transpose(newClone);
		newClone = conditionalRandomNumber(newClone);
		console.log("down", newClone);
		setTileValueArray(newClone);
	}

	const left = 37;
	const up = 38;
	const right = 39;
	const down = 40;

	function handleKeyEvent(event) {
		// if (gameOver) {
		// 	return;
		// }
		switch (event.keyCode) {
			case left:
				onLeftKeyPressed(tileValueArray);
				break;
			case up:
				onUpKeyPressed(tileValueArray);
				break;
			case right:
				onRightKeyPressed(tileValueArray);
				break;
			case down:
				onDownKeyPressed(tileValueArray);
				break;
			default:
				break;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
