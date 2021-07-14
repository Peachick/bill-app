import {
	Route,
	Switch,
} from "react-router-dom";
import React from "react";
import router from "@router/index";
import SideBar from "@/components/SideBar";
import "./app.scss";

function App() {
	return (
		<div className={"page-wrap"}>
			{/*侧边栏*/}
			<SideBar
				menus={router.map((item) => ({ title: item.title, path: item.path }))}
			/>
			{/*<Demo { ...obj } />*/}

			{/*内容区*/}
			<div className="page-content">
				<div className="content-wrap">
					<Switch>
						{
							router.map((item, index) => {
								return (
									<Route
										key={index}
										path={item.path}
										exact
									>
										{item.component}
									</Route>
								);
							})
						}
					</Switch>
				</div>
			</div>
		</div>
	);
}



export default App;
