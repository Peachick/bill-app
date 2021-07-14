/**
 * 路由
 */

import React from "react";
import Home from "@views/Home";
import TextComponent from "@views/TextComponent";
import FnComponent from "@views/FnComponent";
import ClassComponent from "@views/ClassComponents";
import StateComponent from "@views/StateComponent";
import PropsComponent from "@views/PropsComponent";
import FormExample from "@views/FormExample";

const router = [
	{
		path: "/",
		title: "首页",
		component: <Home />,
	},
	{
		path: "/text-component",
		title: "无状态组件",
		component: <TextComponent />,
	},
	{
		path: "/fn-component",
		title: "函数组件",
		component: <FnComponent />,
	},
	{
		path: "/class-component",
		title: "类组件",
		component: <ClassComponent {...{name: "classComponent"}} />,
	},
	{
		path: "/state-component",
		title: "State",
		component: <StateComponent />,
	},
	{
		path: "/props-component",
		title: "Props",
		component: <PropsComponent />,
	},
	{
		path: "/form-example",
		title: "一个Form",
		component: <FormExample />,
	},
];

export default router;
