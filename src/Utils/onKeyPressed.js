import { addElements } from "./addElements";
import { transpose } from "./Transpose";
import { conditionalRandomNumber } from "./conditionalRandomNumber";
import { checkGameStatus } from "./checkGame";

// Function invoked on Left Key Pressed
export function onLeftKeyPressed(array, setArray) {
	let clone = array;
	let score = 0;
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			true
		)[0];
		score += addElements(
			row.filter((elem) => elem),
			true
		)[1];
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return noZeroElements.concat(zeroElements);
	});
	newClone = conditionalRandomNumber(newClone);
	console.log("left", score);
	setArray(newClone, !checkGameStatus(newClone), score);
}

// Function invoked on Right Key Pressed
export function onRightKeyPressed(array, setArray) {
	let clone = array;
	let score = 0;
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			false
		)[0];
		score += addElements(
			row.filter((elem) => elem),
			true
		)[1];
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return zeroElements.concat(noZeroElements);
	});
	newClone = conditionalRandomNumber(newClone);
	setArray(newClone, !checkGameStatus(newClone), score);
	console.log("right", score);
}

// Function invoked on Up Key Pressed
export function onUpKeyPressed(array, setArray) {
	let clone = array;
	let score = 0;
	clone = transpose(clone);
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			true
		)[0];
		score += addElements(
			row.filter((elem) => elem),
			true
		)[1];
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return noZeroElements.concat(zeroElements);
	});
	newClone = transpose(newClone);
	newClone = conditionalRandomNumber(newClone);
	setArray(newClone, !checkGameStatus(newClone), score);
	console.log("up", score);
}

// Function invoked on Down Key Pressed
export function onDownKeyPressed(array, setArray) {
	let clone = array;
	let score = 0;
	clone = transpose(clone);
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			false
		)[0];
		score += addElements(
			row.filter((elem) => elem),
			true
		)[1];
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return zeroElements.concat(noZeroElements);
	});
	newClone = transpose(newClone);
	newClone = conditionalRandomNumber(newClone);
	setArray(newClone, !checkGameStatus(newClone), score);
	console.log("down", score);
}
