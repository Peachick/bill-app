/**
 * state
 */
import React, { useState, useEffect } from "react";

export default class Father extends React.Component {
	state = {
		name: "Father 初始值",
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.name !== prevState.name) {
			console.log("name改变了.");
		}
	}

	changeName = (newName) => {
		// 批量更新
		this.setState({
			name: newName,
		}, () => console.log(this.state.name));
		this.setState({
			name: newName + 1,
		}, () => console.log(this.state.name));
		this.setState({
			name: newName + 2,
		}, () => console.log(this.state.name));

		// 滞后更新
		setTimeout(() => {
			this.setState((prev) => {
				return prev.name = 3;
			}, () => {
				console.log(this.state.name);
			});
		});
	}


	render() {
		return (
			<div>
				父组件，值 {this.state.name}
				<hr/>
				子组件：(props和cb通信)
				<Child
					name={this.state.name}
					change={this.changeName}
				/>

				{/*	EvenBus进行通信：可以跨层级进行，但是需要手动绑定和绑定，对于小项目适合*/}

				{/*函数组件*/}
				<ChildFn />
			</div>
		);
	}

}

class Child extends React.Component {
	render() {
		return <div onClick={() => this.props.change("child传的新名字-->" + +new Date)}>点击改变父组件的值：{this.props.name}</div>;
	}
}

function ChildFn() {
	const [name, setName] = useState("FnChild初始值...");
	// useEffect 监听变化，第一次默认也会执行
	useEffect(() => {
		console.log("监听name变化", name);
	}, [ name ]);
	return <div onClick={() => setName(+ new Date)}>ChildFn -&gt; {name}</div>;
}
