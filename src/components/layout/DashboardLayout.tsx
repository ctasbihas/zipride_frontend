import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<div className="min-h-screen w-full flex">
			<Sidebar />

			<main className="w-full">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
