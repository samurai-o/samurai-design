import React, { useEffect, useRef, useState } from 'react';

type TimeFunc = (...args: any) => void;

export function useInterval(func: TimeFunc, dely: number) {
    const time = useRef<NodeJS.Timeout>(null);
    useEffect(() => {
        if (time.current === null) {
            time.current = setInterval(func, dely);
            return () => clearInterval(time.current)
        }
    }, [dely]);
}