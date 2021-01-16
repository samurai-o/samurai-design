import React from "react";

export const childrenToArraryChildren = (
	children: JSX.Element[] | JSX.Element
) => {
	if (!children) return [];
	return Array.isArray(children) ? children : [children];
};
