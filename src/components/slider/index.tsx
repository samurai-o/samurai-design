import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { defaultContext, ISliderContext, SliderContext } from "./context";
import { SliderContainer } from "./slider";
import { childrenToArraryChildren } from "./utils";

export interface ISliderProps {
	children: JSX.Element[] | JSX.Element;
}

export function Slider(props: ISliderProps & ISliderContext) {
	const { children, ...restProps } = props;
	const [current, setCurrent] = useState(defaultContext.current);
	const _children = childrenToArraryChildren(children);
	const config = useMemo(() => {
		return { ...defaultContext, ...restProps, setCurrent, current };
	}, [current]);

	useInterval(() => {
		setCurrent((time) => {
			const index = time + 1;
			if (index > _children.length + 1) return defaultContext.current;
			return index;
		});
	}, config.time);

	return (
		<SliderContext.Provider value={{ ...config }}>
			<SliderContainer>{_children}</SliderContainer>
		</SliderContext.Provider>
	);
}
