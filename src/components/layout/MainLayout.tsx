import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-grow">{children}</div>
			<Footer />
		</main>
	);
};

export default MainLayout;
