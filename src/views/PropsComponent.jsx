/**
 * props
 */
import React, { useState, useEffect, Fragment } from "react";

const ChildComponent = () => <div>I&#39;m a children component...</div>;
export default function PropRoot() {
	const [age, setAge] = useState(0);

	const onchange = (v) => {
		console.log("父级传的值：" + v);
		setAge(v || age + 1);
	};

	return (
		<Fragment>
			<h3>父组件：{age}</h3>
			<PropsComponent
				age={age}
				changeAge={onchange}
			>
				<ChildComponent />
			</PropsComponent>
		</Fragment>
	);
}
function PropsComponent(props) {
	useEffect(() => {
		console.log("mounted.");

		const { children } = props;
		console.log(children, props);
		return () => {};
	}, []);

	return (
		<Fragment>
			<div>子组件:{PropsComponent.displayName}</div>

			<button
				onClick={() => props.changeAge(Math.floor(Math.random() * 10))}>
				改变父级的值：{props.age}
			</button>

			{React.Children.toArray(props?.children).map((comp) => comp)}
		</Fragment>
	);
}
PropsComponent.displayName = "PropsComponent";
