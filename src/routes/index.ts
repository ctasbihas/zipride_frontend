import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Profile from "@/pages/dashboard/profile";
import Home from "@/pages/public/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
	{
		path: "/dashboard",
		Component: DashboardLayout,
		children: [
			{
				index: true,
				Component: Profile,
			},
		],
	},
]);
