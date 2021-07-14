/**
 * Button组件
 */
import React from "react";
import "./index.scss";

export const buttonTypeMap = {
	default: "default",
	success: "success",
	danger: "danger",
	primary: "primary",
};

export default class BButton extends React.Component {
	render() {
		const { type, children } = this.props;
		const buttonType = buttonTypeMap[type] || buttonTypeMap.default;

		const reactElement = [];
		if (children && children.length) {
			if (React.isValidElement(children)) {
				React.Children.forEach(children, ((child, index) => {
					const newReactElement = React.cloneElement(
						child,
						{
							key: index,
							...child.props,
						},
						child.props.children,
					);
					reactElement.push(
						<button
							key={index}
							{...child.props}
							className={`bill-btn bill-btn-${buttonType}`}
						>
							{newReactElement}
						</button>
					);
				}));
			} else {
				reactElement.push(
					<button
						key={+ new Date}
						{...this.props}
						className={`bill-btn bill-btn-${buttonType}`}
					>
						{children}
					</button>
				);
			}
		} else {
			reactElement.push(
				<button
					key={+new Date}
					{...this.props}
					className={`bill-btn bill-btn-${buttonType}`}
				>
					按钮
				</button>
			);
		}

		return reactElement;
	}
}
