"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childrenToArraryChildren = void 0;
var childrenToArraryChildren = function (children) {
    if (!children)
        return [];
    return Array.isArray(children) ? children : [children];
};
exports.childrenToArraryChildren = childrenToArraryChildren;
