import React from "react";
export interface ITraceProps {
    children: JSX.Element;
    width: number;
}
export declare function Trace(props: ITraceProps): JSX.Element;
export interface ITraceConatinerProps {
    children: JSX.Element | JSX.Element[];
    styles: null | React.CSSProperties;
}
export declare function TraceConatiner(props: ITraceConatinerProps): JSX.Element;
