import Content from "@/components/layout/Content";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ZipRide",
	description:
		"ZipRide - Your Ultimate Ride-Sharing Companion. Seamlessly connect with drivers and passengers for a convenient and eco-friendly travel experience.",
	icons: {
		icon: "/z.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var storageKey = 'theme';
									var theme = localStorage.getItem(storageKey);
									var root = document.documentElement;
									
									// Set color-scheme immediately
									if (!theme || theme === 'system') {
										var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
										root.style.colorScheme = isDark ? 'dark' : 'light';
										root.classList.add(isDark ? 'dark' : 'light');
									} else {
										root.style.colorScheme = theme;
										root.classList.add(theme);
									}
								} catch (e) {
									// If localStorage is not available, use system preference
									var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
									document.documentElement.classList.add(isDark ? 'dark' : 'light');
								}
							})();
						`,
					}}
				/>
			</head>
			<body>
				<div id="root">
					<Content children={children} />
				</div>
			</body>
		</html>
	);
}
