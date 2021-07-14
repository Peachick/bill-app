import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "@style/global.scss";
import App, {
	TextComponent,
	FnComponent,
	ClassComponent,
	Father,
	PropRoot,
	FormTest,
} from "@/App.jsx";

ReactDom.render(
	<React.StrictMode>
		<Router>
			<App name={"Bill App"} />
			<TextComponent />
			<FnComponent />
			<ClassComponent age={1} />
			<Father />
			<hr/>
			<PropRoot />
			<hr/>
			<FormTest />
		</Router>
	</React.StrictMode>,
	document.querySelector("#app"),
);
