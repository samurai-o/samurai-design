/// <reference types="react" />
export declare const defaultContext: ISliderContext;
export interface ISliderContext {
    current: number;
    count: number;
    interval: number;
}
export declare const SliderContext: import("react").Context<ISliderContext>;
