import Sidebar from "../../components/layout/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen w-full flex">
			<Sidebar />

			<main className="w-full">{children}</main>
		</div>
	);
};

export default DashboardLayout;
