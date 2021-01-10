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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceConatiner = exports.Trace = void 0;
var react_1 = __importDefault(require("react"));
var trace_styles_1 = __importDefault(require("./styles/trace.styles"));
function Trace(props) {
    var classnames = trace_styles_1.default();
    return (react_1.default.createElement("div", { className: classnames.traceItem, style: { width: props.width } }, props.children));
}
exports.Trace = Trace;
function TraceConatiner(props) {
    var classnames = trace_styles_1.default();
    return (react_1.default.createElement("div", { className: classnames.traceContainer, style: __assign({}, props.styles) }, props.children));
}
exports.TraceConatiner = TraceConatiner;
