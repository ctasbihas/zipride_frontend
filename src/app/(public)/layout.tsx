"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/providers/theme.provider";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="theme"
		>
			<Navbar />
			{children}
			<Footer />
		</ThemeProvider>
	);
}
