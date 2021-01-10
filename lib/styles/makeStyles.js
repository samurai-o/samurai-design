"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyles = void 0;
var react_jss_1 = require("react-jss");
var defaultTheme_1 = require("../theme/defaultTheme");
function makeStyles(styles, options) {
    return function useStyles(props) {
        var theme = react_jss_1.useTheme();
        var themeConfig = theme || defaultTheme_1.defaultTheme;
        var useClassname = react_jss_1.createUseStyles(styles, {
            name: themeConfig.namespace,
        });
        return useClassname(props);
    };
}
exports.makeStyles = makeStyles;
