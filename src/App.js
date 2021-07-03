import React from "react";
import Movies from "./components/movies";
import Form from "./components/basicForm";
import "./App.css";

function App() {
	return (
		<div className="App">
			<main role="main" className="container">
				<Form />
				<Movies />
			</main>
		</div>
	);
}

export default App;
