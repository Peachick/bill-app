import React from "react";

export const TextComponent = () => <div>我是一个文本..</div>;
const textArray = ["react", "node", "vue", "webpack"];

export default class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.status = true;
	}

	renderFn = () => {
		const reactElement = (
			<div style={{ color: "red" }} className={"xixi"}>
				{this.status ? <TextComponent /> : <div>false...</div>}
				{textArray.map((item) => <span key={item}>{item}</span>)}
				书写自由
				<div>我的自由</div>
				<button onClick={() => console.log(this.render())}>打印</button>
			</div>
		);

		console.log(reactElement);

		const { children } = reactElement.props;
		console.log(children);

		const flagChild = React.Children.toArray(children);
		console.log(flagChild);

		const newChildren = [];
		React.Children.forEach(flagChild, (item) => {
			if(React.isValidElement(item)) newChildren.push(item);
		});

		const lastChildren = React.createElement("div",{ className :"last", style: { background: "teal" } },"say goodbye");
		newChildren.push(lastChildren);

		const newReactElement = React.cloneElement(reactElement, {}, ...newChildren);

		return newReactElement;
	}

	render() {
		return this.renderFn();
	}
}
