import Banner from "@/components/modules/home/Banner";
import CallToAction from "@/components/modules/home/CallToAction";
import Process from "@/components/modules/home/Process";
import SafetyFeatures from "@/components/modules/home/SafetyFeatures";
import ServiceHighlights from "@/components/modules/home/ServiceHighlights";
import Stats from "@/components/modules/home/Stats";
import Testimonials from "@/components/modules/home/Testimonials";

const Home = () => {
	return (
		<main>
			<Banner />
			<Stats />
			<SafetyFeatures />
			<Process />
			<ServiceHighlights />
			<Testimonials />
			<CallToAction />
		</main>
	);
};

export default Home;
