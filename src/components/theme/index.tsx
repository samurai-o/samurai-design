import React, { createContext } from "react";
import { createTheming, JssProvider, SheetsRegistry } from "react-jss";
import { defaultTheme } from "./defaultTheme";

export interface IThemeContext {
	namespace: string;
}

export interface IConfigProviderProps {
	children: JSX.Element;
	config: IThemeContext;
}

export const ConfigContext = createContext<IThemeContext>(defaultTheme);

const { ThemeProvider } = createTheming(ConfigContext);

const registry = new SheetsRegistry();

export function ThemeConfigProvider(
	props: Partial<{ theme: IThemeContext }> & {
		children: JSX.Element | JSX.Element[];
	}
) {
	return (
		<JssProvider registry={registry}>
			<ThemeProvider theme={{ ...defaultTheme, ...props.theme }}>
				{props.children}
			</ThemeProvider>
		</JssProvider>
	);
}
