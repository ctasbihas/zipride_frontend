import {
	BookOpen,
	Car,
	DollarSign,
	History,
	LayoutDashboard,
	List,
	Settings,
	User,
	UserCircle2,
	Users,
} from "lucide-react";

export const getNavigationLinks = (role: string) => {
	switch (role) {
		case "admin":
			return [
				{
					label: "Analytics",
					path: "/dashboard/admin/analytics",
					icon: <LayoutDashboard className="h-5 w-5" />,
				},
				{
					label: "User Management",
					path: "/dashboard/users",
					icon: <Users className="h-5 w-5" />,
				},
				{
					label: "Ride Management",
					path: "/dashboard/rides",
					icon: <Car className="h-5 w-5" />,
				},
				{
					label: "Profile",
					path: "/dashboard/profile",
					icon: <User className="h-5 w-5" />,
				},
				{
					label: "Settings",
					path: "/dashboard/settings",
					icon: <Settings className="h-5 w-5" />,
				},
			];

		case "driver":
			return [
				{
					label: "Overview",
					path: "/dashboard/driver/overview",
					icon: <LayoutDashboard className="h-5 w-5" />,
				},
				{
					label: "Available Rides",
					path: "/dashboard/available-rides",
					icon: <BookOpen className="h-5 w-5" />,
				},
				{
					label: "Active Ride",
					path: "/dashboard/active-ride",
					icon: <Car className="h-5 w-5" />,
				},
				{
					label: "Earnings",
					path: "/dashboard/earnings",
					icon: <DollarSign className="h-5 w-5" />,
				},
				{
					label: "Ride History",
					path: "/dashboard/ride-history",
					icon: <History className="h-5 w-5" />,
				},
				{
					label: "Profile",
					path: "/dashboard/profile",
					icon: <User className="h-5 w-5" />,
				},
				{
					label: "Settings",
					path: "/dashboard/settings",
					icon: <Settings className="h-5 w-5" />,
				},
			];

		case "rider":
			return [
				{
					label: "Dashboard",
					path: "/dashboard/rider/overview",
					icon: <UserCircle2 className="h-5 w-5" />,
				},
				{
					label: "Book A Ride",
					path: "/dashboard/book-ride",
					icon: <BookOpen className="h-5 w-5" />,
				},
				{
					label: "Active Ride",
					path: "/dashboard/active-ride",
					icon: <Car className="h-5 w-5" />,
				},
				{
					label: "Ride History",
					path: "/dashboard/ride-history",
					icon: <List className="h-5 w-5" />,
				},
				{
					label: "Profile",
					path: "/dashboard/profile",
					icon: <UserCircle2 className="h-5 w-5" />,
				},
				{
					label: "Settings",
					path: "/dashboard/settings",
					icon: <Settings className="h-5 w-5" />,
				},
			];

		default:
			return [];
	}
};
