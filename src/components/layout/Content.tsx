"use client";

import { ThemeProvider } from "@/providers/theme.provider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<ThemeProvider
				defaultTheme="system"
				storageKey="theme"
			>
				{children}
			</ThemeProvider>
		</Provider>
	);
};

export default Content;
