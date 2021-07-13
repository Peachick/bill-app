import React, {Fragment, useState} from "react";

function App(props) {
	return (
		<div>
			<span>Bill App</span>
			<div>{props.name}</div>
			<Bar />
		</div>
	);
}

function Bar() {
	const [name, setName] = useState("");
	return (
		<Fragment>
			<h3>{name}</h3>
			<button onClick={() => setName(new Date().toString())}>刷新</button>
		</Fragment>
	);
}

export default App;
