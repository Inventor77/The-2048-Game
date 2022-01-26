import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import GameBoard from "./Component/GameBoard";

function App() {
  return (
		<div className="App">
			<Header />
			<GameBoard />
			<Footer />
		</div>
	);
}

export default App;
