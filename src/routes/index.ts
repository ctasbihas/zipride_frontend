import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Profile from "@/pages/dashboard/profile";
import Block from "@/pages/error/block";
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
		path: "/login",
		Component: Login,
	},
	{
		path: "/register",
		Component: Register,
	},
	{
		path: "/block",
		Component: Block,
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
