import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import GameBoard from "./Component/GameBoard";

function App() {
	const [sidelength, setSideLength] = useState(4);
	const changeBoardSideLength = () => {
		setSideLength((prevState) => prevState + 4);
	};

	return (
		<div className="App">
			<div className="game_container">
				<Header changeSideLength={changeBoardSideLength} />
				<GameBoard sideLength={sidelength} />
				<Footer />
			</div>
		</div>
	);
}

export default App;
