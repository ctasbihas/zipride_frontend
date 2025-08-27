import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Dashboard from "@/pages/dashboard/dashboard";
import BookRide from "@/pages/dashboard/rider/bookRide";
import Block from "@/pages/error/block";
import NotFound from "@/pages/error/notFound";
import About from "@/pages/public/about";
import Contact from "@/pages/public/contact";
import FAQ from "@/pages/public/FAQ";
import Features from "@/pages/public/features";
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
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/features",
				Component: Features,
			},
			{
				path: "/contact",
				Component: Contact,
			},
			{
				path: "/faq",
				Component: FAQ,
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
				path: "/dashboard",
				Component: Dashboard,
			},
			{
				path: "/dashboard/book-ride",
				Component: BookRide,
			},
		],
	},
	{
		path: "*",
		Component: NotFound,
	},
]);
