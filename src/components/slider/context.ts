import { createContext } from 'react';

// 默认配置
export const defaultContext: ISliderContext = {
    count: 0,
    interval: 2000,
    current: 1,
}

export interface ISliderContext {
    current: number;
    count: number; // 轮播总数
    interval: number; // 自动轮播间隔
}

export const SliderContext = createContext<any>(defaultContext);