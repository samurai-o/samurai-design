"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderContext = exports.defaultContext = void 0;
var react_1 = require("react");
exports.defaultContext = {
    count: 0,
    interval: 2000,
    current: 0,
};
exports.SliderContext = react_1.createContext(exports.defaultContext);
