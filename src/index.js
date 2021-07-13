import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "@/App.jsx";
import "@style/global.scss";

ReactDom.render(
	<React.StrictMode>
		<Router>
			<App name={"Bill App"} />
		</Router>
	</React.StrictMode>,
	document.querySelector("#app"),
);
