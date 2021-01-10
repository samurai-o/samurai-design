import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { defaultContext, ISliderContext, SliderContext } from "./context";
import { SliderContainer } from "./slider";
import { childrenToArraryChildren, updateStatus } from "./utils";
import defaultProps from "./defaultProps";

export interface ISliderProps {
	children: JSX.Element[] | JSX.Element;
	dots: boolean; // 是否展示底部的操作面板
	infinite: boolean; // 是否无限播放
	showCount: number; // 单次展示数: 可视区可见元素数量
	step: number; // 步长:一次移动多少
	autoplay: boolean; // 是否自动播放
	autoplaySpeed: number; // 自动播放间隔
	pauseOnHover: boolean; // 鼠标悬浮是否暂停动画
	responsive?: any[];
}

export function Slider(props: ISliderProps) {
	const { children, ...restProps } = props;
	const [breakpoint, setBreakpoint] = useState(null);
	const [setCurrent] = useState(defaultContext.current);
	const _children = childrenToArraryChildren(children);

	const { dom, newChildren, newProps, settings } = useMemo(() => {
		return updateStatus(breakpoint, props);
	}, [breakpoint, props]);
	// useInterval(() => {
	// 	setCurrent((time) => {
	// 		const index = time + 1;
	// 		if (index > _children.length + 1) return defaultContext.current;
	// 		return index;
	// 	});
	// }, config.interval);
	return !dom ? (
		<SliderContext.Provider value={{ ...settings }}>
			<SliderContainer>{newChildren}</SliderContainer>
		</SliderContext.Provider>
	) : (
		settings.dom
	);
}
