import React from "react";

export default class ClassComponent extends React.Component {
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
