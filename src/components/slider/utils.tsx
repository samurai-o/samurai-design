import React from "react";
import classname from "classname";
import defaultProps from "./defaultProps";

export const childrenToArraryChildren = (
	children: JSX.Element[] | JSX.Element
) => {
	if (!children) return [];
	return Array.isArray(children) ? children : [children];
};

export function updateStatus(breakpoint: any, props: any) {
	let settings;
	let newProps;
	let dom;
	if (breakpoint) {
		// 用于鼠标移至到当前目标时记录中断位配置,重启时从中断点开始
		newProps = props.responsive.filter(
			(resp: any) => resp.breakpoint === breakpoint
		);
		settings =
			newProps[0].settings === "unslick"
				? "unslick"
				: { ...defaultProps, ...props, ...newProps[0].settings };
	} else {
		settings = { ...defaultProps, ...props };
	}
	/** 居中展示时，修改位移偏移量 */
	if (settings.centerMode) {
		/** 位移量设置大于1时 */
		if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
			console.warn(
				`slidesToScroll should be equal to 1 in centerMode, you are using ${settings.slidesToScroll}`
			);
		}
		settings.slidesToScroll = 1;
	}

	/** 淡入淡出逻辑 */
	if (settings.fade) {
		if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
			console.warn(
				`slidesToShow should be equal to 1 when fade is true, you're using ${settings.slidesToShow}`
			);
		}
		if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
			console.warn(
				`slidesToScroll should be equal to 1 when fade is true, you're using ${settings.slidesToScroll}`
			);
		}
		settings.slidesToShow = 1;
		settings.slidesToScroll = 1;
	}

	let children: any = React.Children.toArray(props.children);
	children = children.filter((child) =>
		typeof child === "string" ? !!child.trim() : !!child
	);
	let newChildren = [];
	let currentWidth = null;
	for (
		let i = 0;
		i < children.length;
		i += settings.rows * settings.slidesPerRow
	) {
		let newSlide = [];
		for (
			let j = i;
			j < i + settings.rows * settings.slidesPerRow;
			j += settings.slidesPerRow
		) {
			let row = [];
			for (let k = j; k < j + settings.slidesPerRow; k += 1) {
				if (settings.variableWidth && children[k].props.style) {
					currentWidth = children[k].props.style.width;
				}
				if (k >= children.length) break;
				row.push(
					React.cloneElement(children[k], {
						key: 100 * i + 10 * j + k,
						tabIndex: -1,
						style: {
							width: `${100 / settings.slidesPerRow}%`,
							display: "inline-block",
						},
					})
				);
			}
			newSlide.push(<div key={10 * i + j}>{row}</div>);
		}
		if (settings.variableWidth) {
			newChildren.push(
				<div key={i} style={{ width: currentWidth }}>
					{newSlide}
				</div>
			);
		} else {
			newChildren.push(<div key={i}>{newSlide}</div>);
		}

		if (settings === "unslick") {
			const className = "regular slider " + (this.props.className || "");
			dom = <div className={className}>{children}</div>;
		} else if (newChildren.length <= settings.slidesToShow) {
			settings.unslick = true;
		}
	}
	return {
		settings,
		newChildren,
		newProps,
		dom,
	};
}
