import React, {
	LegacyRef,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { defaultContext, SliderContext } from "./context";
import styles from "./styles/slider.styles";
import { Trace, TraceConatiner } from "./trace";

export interface ISliderContainerProps {
	children: JSX.Element[];
}

export function SliderContainer(props: ISliderContainerProps) {
	const count = React.Children.count(props.children);
	const { current, setCurrent } = useContext(SliderContext);
	const container = useRef<HTMLElement>(null);
	const classanmes = styles(props);
	/** trace样式计算 */
	const traceStyles: () => React.CSSProperties = useMemo(() => {
		return () => {
			if (!container.current) return {};
			console.log(current);
			if (current === count + 1) {
				return {
					width: container.current.clientWidth * (count + 1),
					transform: "translate3d(0px, 0px, 0px)",
				};
				setCurrent(defaultContext.current);
			}
			return {
				width: container.current.clientWidth * (count + 1),
				transform: `translate3d(-${
					(current - 1) * container.current.clientWidth
				}px, 0px, 0px)`,
				transition: "transform 0.5s ease 0s",
			};
		};
	}, [count, container, current]);

	const renderChildren = useMemo(() => {
		return (children: JSX.Element[]) => {
			if (!container.current) return [];
			return React.Children.map(children, (child) => {
				return <Trace width={container.current.clientWidth}>{child}</Trace>;
			}).concat([
				<Trace width={container.current.clientWidth}>{children[0]}</Trace>,
			]);
		};
	}, [container]);

	return (
		<div className={classanmes.sliderContainer}>
			<div className={classanmes.sliderTrace} ref={container as any}>
				<TraceConatiner styles={traceStyles()}>
					{renderChildren(props.children)}
				</TraceConatiner>
			</div>
		</div>
	);
}
