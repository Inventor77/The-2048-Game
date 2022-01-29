import { addElements } from "./addElements";
import { transpose } from "./Transpose";
import { conditionalRandomNumber } from "./conditionalRandomNumber";
import { checkGameStatus } from "./checkGame";

// Function invoked on Left Key Pressed
export function onLeftKeyPressed(array, setArray) {
	let clone = array;
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
	setArray(newClone, !checkGameStatus(newClone));
	console.log("left", newClone);
}

// Function invoked on Right Key Pressed
export function onRightKeyPressed(array, setArray) {
	let clone = array;
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
	setArray(newClone, !checkGameStatus(newClone));
	console.log("right", newClone);
}

// Function invoked on Up Key Pressed
export function onUpKeyPressed(array, setArray) {
	let clone = array;
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
	setArray(newClone, !checkGameStatus(newClone));
	console.log("up", newClone);
}

// Function invoked on Down Key Pressed
export function onDownKeyPressed(array, setArray) {
	let clone = array;
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
	setArray(newClone, !checkGameStatus(newClone));
	console.log("down", newClone);
}
