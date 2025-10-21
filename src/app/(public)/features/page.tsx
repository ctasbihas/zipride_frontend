import Banner from "@/components/modules/features/Banner";
import Capabilities from "@/components/modules/features/Capabilities";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Features - ZipRide",
	description:
		"Discover the cutting-edge features of ZipRide that make transportation safe, reliable, and convenient for everyone.",
};

const Features = () => {
	return (
		<main>
			<Banner />
			<Capabilities />
		</main>
	);
};

export default Features;
