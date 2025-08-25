import Banner from "@/components/modules/home/Banner";
import Process from "@/components/modules/home/Process";
import ServiceHighlights from "@/components/modules/home/ServiceHighlights";
import Stats from "@/components/modules/home/Stats";

const Home = () => {
	return (
		<main>
			<Banner />
			<Stats />
			<Process />
			<ServiceHighlights />
		</main>
	);
};

export default Home;
