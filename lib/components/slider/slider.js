"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderContainer = void 0;
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
var slider_styles_1 = __importDefault(require("./styles/slider.styles"));
var trace_1 = require("./trace");
function SliderContainer(props) {
    var _a = react_1.useContext(context_1.SliderContext), count = _a.count, current = _a.current;
    var _b = react_1.useState();
    var container = react_1.useRef(null);
    var classanmes = slider_styles_1.default(props);
    var traceStyles = react_1.useMemo(function () {
        return function () {
            if (!container.current)
                return {};
            return {
                width: container.current.clientWidth * count,
                transform: "translate3d(-" + container.current.clientWidth * current + "px, 0px, 0px)",
            };
        };
    }, [count, container, current]);
    var renderChildren = react_1.useMemo(function () {
        return function (children) {
            if (!container.current)
                return [];
            return react_1.default.Children.map(children, function (child) {
                return react_1.default.createElement(trace_1.Trace, { width: container.current.clientWidth }, child);
            });
        };
    }, [container]);
    react_1.useEffect(function () {
        console.log("useEffect", current);
    }, [current]);
    console.log("component", current);
    return (react_1.default.createElement("div", { className: classanmes.sliderContainer },
        react_1.default.createElement("div", { className: classanmes.sliderTrace, ref: container },
            react_1.default.createElement(trace_1.TraceConatiner, { styles: traceStyles() }, renderChildren(props.children)))));
}
exports.SliderContainer = SliderContainer;
