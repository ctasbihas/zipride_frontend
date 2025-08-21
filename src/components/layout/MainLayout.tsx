import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-grow container mx-auto">{children}</div>
			<footer>This is footer (Coming Soon)</footer>
		</main>
	);
};

export default MainLayout;
