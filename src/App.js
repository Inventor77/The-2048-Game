import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import GameBoard from "./Component/GameBoard";

function App() {
	const [sideLength, setSideLength] = useState(4);
	const [newGame, setNewGame] = useState(true);
	const [score, setScore] = useState(0);
	const changeBoardSideLength = (length) => {
		setSideLength(length);
	};
	const changeScore = (value) => {
		setScore((preValue) => preValue + value);
	};
	function tryNewGame(bool) {
		setNewGame(bool);
	}

	return (
		<div className="App">
			<div className="game_container">
				<Header
					sideLength={sideLength}
					changeSideLength={changeBoardSideLength}
					score={score}
					newGame={newGame}
					tryNewGame={tryNewGame}
				/>
				<GameBoard
					sideLength={sideLength}
					changeScore={changeScore}
					newGame={newGame}
				/>
				<Footer sideLength={sideLength} />
			</div>
		</div>
	);
}

export default App;
