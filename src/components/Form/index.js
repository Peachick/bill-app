/**
 * Form组件
 */

import React, { Component } from "react";
import "./index.scss";

export default class BForm extends Component {
	state = {
		formData: {},
	};

	submit = (cb) => {
		cb({...this.state.formData});
	};

	reset = () => {
		const { formData } = this.state;
		Object.keys(formData).forEach((k) => {
			formData[k] = undefined;
		});
		this.setState({
			formData,
		});
	};

	setFormItem = (name, value) => {
		this.setState({
			formData: {
				...this.state.formData,
				[name]: value,
			},
		});
	};

	render() {
		const { children } = this.props;
		const renderChildren = [];
		React.Children.forEach(children, (child, index) => {
			if (child.type.name === "BFormItem") {
				const { name } = child.props;
				const newElement = React.cloneElement(
					child,
					{
						key: child.props.key || child.props.name || index,
						handleChange: this.setFormItem,
						value: this.state.formData[name] || "",
					},
					child.props.children,
				);
				renderChildren.push(newElement);
			} else {
				renderChildren.push(React.cloneElement(
					child,
					{
						key: child.props.key || index,
					},
					child.props.children,
				));
			}
		});
		return renderChildren;
	}
}
