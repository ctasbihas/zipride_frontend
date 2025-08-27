import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Block from "@/pages/error/block";
import NotFound from "@/pages/error/notFound";
import About from "@/pages/public/about";
import Contact from "@/pages/public/contact";
import FAQ from "@/pages/public/FAQ";
import Features from "@/pages/public/features";
import Home from "@/pages/public/home";
import { withAuth } from "@/utils/withAuth";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Dashboard = lazy(() => import("@/pages/dashboard/dashboard"));
const BookRide = lazy(() => import("@/pages/dashboard/rider/bookRide"));
const ActiveRide = lazy(() => import("@/pages/dashboard/activeRide"));
const RideHistory = lazy(() => import("@/pages/dashboard/rideHistory"));
const Profile = lazy(() => import("@/pages/dashboard/profile"));
const Settings = lazy(() => import("@/pages/dashboard/rider/settings"));
const AvailableRides = lazy(
	() => import("@/pages/dashboard/driver/availableRides")
);
const Earnings = lazy(() => import("@/pages/dashboard/driver/earnings"));

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
				Component: withAuth(Dashboard),
			},
			{
				path: "/dashboard/book-ride",
				Component: withAuth(BookRide, ["rider"]),
			},
			{
				path: "/dashboard/active-ride",
				Component: withAuth(ActiveRide, ["rider", "driver"]),
			},
			{
				path: "/dashboard/ride-history",
				Component: withAuth(RideHistory, ["rider", "driver"]),
			},
			{
				path: "/dashboard/profile",
				Component: withAuth(Profile, ["rider", "driver", "admin"]),
			},
			{
				path: "/dashboard/settings",
				Component: withAuth(Settings, ["rider", "driver", "admin"]),
			},
			{
				path: "/dashboard/available-rides",
				Component: withAuth(AvailableRides, ["driver"]),
			},
			{
				path: "/dashboard/earnings",
				Component: withAuth(Earnings, ["driver"]),
			},
		],
	},
	{
		path: "*",
		Component: NotFound,
	},
]);
