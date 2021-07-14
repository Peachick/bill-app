import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "@style/global.scss";
import App from "@/App.jsx";

ReactDom.render(
	<React.StrictMode>
		<Router	history={Router}>
			<App name={"Bill App"} />
			{/*<ClassComponent age={1} />*/}
			{/*<Father />*/}
			{/*<hr/>*/}
			{/*<PropRoot />*/}
			{/*<hr/>*/}
			{/*<FormTest />*/}
			{/*<hr/>*/}
		</Router>
	</React.StrictMode>,
	document.querySelector("#app"),
);
