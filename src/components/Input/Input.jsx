/**
 * Input组件
 */

import React, { Component } from "react";
import "./index.scss";

export default class BInput extends Component {
	state = {
		value: "",
	};

	onChange = (v) => {
		this.setState({
			value: v,
		});
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input
				value={this.state.value}
				onChange={(e) => this.onChange(e.target.value)}
				{...this.props}
				className={`bill-input ${this.props.className || ""}`}
			/>
		);
	}
}
