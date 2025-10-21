"use client";

import { ThemeProviderContext, type Theme } from "@/context/theme.context";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === "undefined") {
			return defaultTheme;
		}
		const storedTheme = localStorage.getItem(storageKey) as Theme;
		return storedTheme || defaultTheme;
	});

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	useEffect(() => {
		if (theme !== "system") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			const root = window.document.documentElement;
			root.classList.remove("light", "dark");
			const systemTheme = mediaQuery.matches ? "dark" : "light";
			root.classList.add(systemTheme);
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={value}
		>
			{children}
		</ThemeProviderContext.Provider>
	);
}
