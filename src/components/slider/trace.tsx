import React from "react";
import useStyles from "./styles/trace.styles";

export interface ITraceProps {
	children: JSX.Element;
	width: number;
}

export function Trace(props: ITraceProps) {
	const classnames = useStyles();
	return (
		<div className={classnames.traceItem} style={{ width: props.width }}>
			{props.children}
		</div>
	);
}

export interface ITraceConatinerProps {
	children: JSX.Element | JSX.Element[];
	styles: null | React.CSSProperties;
}

export function TraceConatiner(props: ITraceConatinerProps) {
	const classnames = useStyles();
	return (
		<div className={classnames.traceContainer} style={{ ...props.styles }}>
			{props.children}
		</div>
	);
}
