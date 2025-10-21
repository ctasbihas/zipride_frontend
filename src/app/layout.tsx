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
		<html lang="en">
			<body>
				<div id="root">
					<Content children={children} />
				</div>
			</body>
		</html>
	);
}
