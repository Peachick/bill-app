/**
 * FormItem
 */
import React from "react";

export default function BFormItem(props) {
	const { children, name, handleChange, value, label } = props;

	const onChange = (value) => {
		handleChange(name, value);
	};

	const reactElement = () => {
		const renderChildren = [];
		if (!React.isValidElement(children)) {
			renderChildren.push(children);
		} else {
			React.Children.forEach(children, (child, index) => {
				if (child.type.name === "BInput") {
					const newElement = React.cloneElement(
						child,
						{
							key: child.props.key || child.props.name || index,
							value,
							onChange: (e) => onChange(e.target.value),
						},
					);
					renderChildren.push(
						<div
							key={index}
							className={"bill-form-item"}
						>
							<span
								className={"bill-form-item-label"}
							>
								{label}:
							</span>
							{newElement}
						</div>
					);
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
		}

		return renderChildren;
	};

	return reactElement();
}
