import { Outlet } from "react-router";

const DashboardLayout = () => {
	return (
		<div className="min-h-screen flex">
			<aside className="flex-1 border-r p-4">
				<div>Sidebar</div>
				<div>(Coming soon)</div>
			</aside>

			<main className="flex-4 p-4">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
