import React, {
	Component,
	Fragment,
	useEffect,
	useState,
} from "react";
import "./app.scss";
import BForm from "@/components/Form";
import BFormItem from "@/components/Form/FormItem";
import BInput from "@/components/Input/Input";
import BButton from "@/components/Button";

const obj = { name: "hello", age: 12 };

function App(props) {
	return (
		<div>
			<span>Bill App</span>
			<div>{props.name}</div>
			<Bar />
			<Demo { ...obj } />
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

export const TextComponent = () => <div>我是一个文本..</div>;
const textArray = ["react", "node", "vue", "webpack"];

class Demo extends React.Component {
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

export function FnComponent() {
	const [name, setName] = useState("fnComponent");
	return <div onClick={() => setName(prev => prev + 1)}>{name}</div>;
}

export class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return <div>
			{Object.keys(this.props).map((k) => <span key={k}>{this.props[k]}</span>)}
		</div>;
	}

}

/**
 * state
 */
export class Father extends React.Component {
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

/**
 * props
 */
const ChildComponent = () => <div>I&#39;m a children component...</div>;
export function PropRoot() {
	const [age, setAge] = useState(0);

	const onchange = (v) => {
		console.log("父级传的值：" + v);
		setAge(v || age + 1);
	};

	return (
		<Fragment>
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

// Form组件
export class FormTest extends Component {
	form = React.createRef();

	submit = () => {
		this.form.current.submit((values) => {
			console.log(values);
		});
	}

	reset = () => {
		this.form.current.reset();
	}

	render() {
		return (
			<div
				className={"form-wrap"}
			>
				<BForm
					ref={this.form}
				>
					<BFormItem
						name={"username"}
						label={"大名"}
					>
						<BInput
							style={{width: "300px"}}
							placeholder={"你的大名..."}
						/>
					</BFormItem>
					<BFormItem
						name={"password"}
						label={"暗号"}
					>
						<BInput
							style={{width: "300px"}}
							placeholder={"你的暗号..."}
						/>
					</BFormItem>
					<BFormItem>
						<div className="form-btns">
							<BButton
								type={"primary"}
								onClick={this.submit}
							>
								提交
							</BButton>
							<BButton
								type={"danger"}
								onClick={this.reset}
							>
								重置
							</BButton>
						</div>
					</BFormItem>
				</BForm>
			</div>
		);
	}
}

export default App;
