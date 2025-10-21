import AppShowcase from "@/components/modules/home/AppShowcase";
import Banner from "@/components/modules/home/Banner";
import CallToAction from "@/components/modules/home/CallToAction";
import Process from "@/components/modules/home/Process";
import SafetyFeatures from "@/components/modules/home/SafetyFeatures";
import ServiceHighlights from "@/components/modules/home/ServiceHighlights";
import Stats from "@/components/modules/home/Stats";
import Testimonials from "@/components/modules/home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - ZipRide",
	description:
		"ZipRide offers reliable and affordable transportation services with top-notch safety features. Book your ride today!",
};

const Home = () => {
	return (
		<main>
			<Banner />
			<Stats />
			<SafetyFeatures />
			<Process />
			<ServiceHighlights />
			<AppShowcase />
			<Testimonials />
			<CallToAction />
		</main>
	);
};

export default Home;
