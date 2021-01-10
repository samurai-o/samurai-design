import React, {
	LegacyRef,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { SliderContext } from "./context";
import styles from "./styles/slider.styles";
import { Trace, TraceConatiner } from "./trace";

export interface ISliderContainerProps {
	children: JSX.Element[];
}

export function SliderContainer(props: ISliderContainerProps) {
	const { unslick } = useContext(SliderContext);
	const container = useRef<HTMLElement>(null);
	const classanmes = styles(props);

	const handlerBtn = useMemo(() => {
		if (unslick) {
			return {
				preBtn: () => {
					return <div>{"<"}</div>;
				},
				nextBtn: () => {
					return <div>{">"}</div>;
				},
			};
		}
		return {};
	}, [unslick]);
	console.log(settings);
	// /** trace样式计算 */
	// const traceStyles = useMemo(() => {
	// 	return () => {
	// 		if (!container.current) return {};
	// 		if (current === count + 1) {
	// 			return {
	// 				width: container.current.clientWidth * (count + 1),
	// 				transform: "translate3d(0px, 0px, 0px)",
	// 			};
	// 		}
	// 		return {
	// 			width: container.current.clientWidth * (count + 1),
	// 			transform: `translate3d(-${
	// 				container.current.clientWidth * current
	// 			}px, 0px, 0px)`,
	// 			transition: "transform 500ms ease 0.2s",
	// 		};
	// 	};
	// }, [count, container, current]);

	// const renderChildren = useMemo(() => {
	// 	return (children: JSX.Element[]) => {
	// 		if (!container.current) return [];
	// 		return React.Children.map(children, (child) => {
	// 			return <Trace width={container.current.clientWidth}>{child}</Trace>;
	// 		}).concat([
	// 			<Trace width={container.current.clientWidth}>{children[0]}</Trace>,
	// 		]);
	// 	};
	// }, [container, count, current]);

	return (
		<div className={classanmes.sliderContainer}>
			<div className={classanmes.sliderTrace} ref={container as any}>
				1
				{/* <TraceConatiner styles={traceStyles()}>
					{renderChildren(props.children)}
				</TraceConatiner> */}
			</div>
		</div>
	);
}
