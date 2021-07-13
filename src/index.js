import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App, { TextComponent, FnComponent, ClassComponent, Father } from "@/App.jsx";
import "@style/global.scss";

ReactDom.render(
	<React.StrictMode>
		<Router>
			<App name={"Bill App"} />
			<TextComponent />
			<FnComponent />
			<ClassComponent age={1} />
			<Father />
		</Router>
	</React.StrictMode>,
	document.querySelector("#app"),
);
