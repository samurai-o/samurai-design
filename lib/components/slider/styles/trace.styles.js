"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../../styles");
exports.default = styles_1.makeStyles({
    traceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'transform 500ms ease 0s'
    },
    traceItem: {
        '& img': {
            width: '100%',
            verticalAlign: 'middle'
        }
    }
});
