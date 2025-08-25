import Banner from "@/components/modules/home/Banner";
import Process from "@/components/modules/home/Process";
import ServiceHighlights from "@/components/modules/home/ServiceHighlights";
import Stats from "@/components/modules/home/Stats";
import Testimonials from "@/components/modules/home/Testimonials";

const Home = () => {
	return (
		<main>
			<Banner />
			<Stats />
			<Process />
			<ServiceHighlights />
			<Testimonials />
		</main>
	);
};

export default Home;
