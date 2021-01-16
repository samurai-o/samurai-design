import { createContext } from "react";

// 默认配置
export const defaultContext: ISliderContext = {
	auto: true,
	time: 2000,
	current: 1,
	setCurrent: (current: number) => {},
};

export interface ISliderContext {
	auto: boolean;
	time: number;
	current: number;
	setCurrent: (current: number) => void;
}

export const SliderContext = createContext<ISliderContext>(defaultContext);
