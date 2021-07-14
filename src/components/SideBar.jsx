/**
 * 侧边栏
 */

import React from "react";
import { Link } from "react-router-dom";

export const SideBarItem = ({ title, path, className }) => {
	return (
		<li
			className={`bill-sidebar-item ${className || ""}`}
		>
			<Link to={path}>{title}</Link>
		</li>
	);
};

export default class SideBar extends React.Component {
	render() {
		const reactElement = [];
		const { children, menus } = this.props;
		const childrenArr = React.Children.toArray(children);
		if (childrenArr && childrenArr.length) {
			React.Children.forEach(children, ((child) => {
				if (React.isValidElement(child) && child.type.name === "SideBarItem") {
					reactElement.push(child);
				}
			}));

			if (reactElement.length < 1) return;
		}

		return (
			<div className={"bill-sidebar"}>
				{
					reactElement.length
						? reactElement
						: menus.map((item, index) => <SideBarItem key={index + item.title} {...item} title={item.title} path={item.path} /> )
				}
			</div>
		);
	}
}
