"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var react_1 = __importStar(require("react"));
var useInterval_1 = require("../../hooks/useInterval");
var context_1 = require("./context");
var slider_1 = require("./slider");
var utils_1 = require("./utils");
function Slider(props) {
    var _a = react_1.useState(context_1.defaultContext.current), current = _a[0], setCurrent = _a[1];
    var children = utils_1.childrenToArraryChildren(props.children);
    var config = __assign(__assign({ interval: props.interval }, context_1.defaultContext), { count: children.length, current: current });
    useInterval_1.useInterval(function () {
        setCurrent(function (time) {
            console.log(time, "time");
            if (time < children.length - 1) {
                return time + 1;
            }
            return 0;
        });
    }, config.interval);
    return (react_1.default.createElement(context_1.SliderContext.Provider, { value: config },
        react_1.default.createElement(slider_1.SliderContainer, null, children)));
}
exports.Slider = Slider;
