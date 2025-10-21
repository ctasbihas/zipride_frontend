import Collaboration from "@/components/modules/about/Collaboration";
import Hero from "@/components/modules/about/Hero";
import Mission from "@/components/modules/about/Mission";
import TeamProfile from "@/components/modules/about/TeamProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About - ZipRide",
	description:
		"Learn more about ZipRide, our mission, and the team behind our reliable transportation services.",
};

const About = () => {
	return (
		<main>
			<Hero />
			<Mission />
			<TeamProfile />
			<Collaboration />
		</main>
	);
};

export default About;
