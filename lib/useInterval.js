"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var react_1 = require("react");
function useInterval(func, dely) {
    var time = react_1.useRef(null);
    react_1.useEffect(function () {
        if (time.current === null) {
            time.current = setInterval(func, dely);
            return function () { return clearInterval(time.current); };
        }
    }, [dely]);
}
exports.useInterval = useInterval;
