import { useUserQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";
import { Button } from "../ui/button";

const Sidebar = () => {
	const { data, isSuccess } = useUserQuery(undefined);
	const isAuthenticated = isSuccess && data.success;

	const getNavigationLinks = () => {
		switch (isAuthenticated && data.data.role) {
			case "admin":
				return [
					{
						label: "Overview",
						path: "/dashboard",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<path
									d="M7 13.5 11 10l3 2 3-2.5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "User Management",
						path: "/dashboard/users",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="9"
									cy="7"
									r="4"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<path
									d="M22 21v-2a4 4 0 0 0-3-3.87"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16 3.13a4 4 0 0 1 0 7.75"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Driver Management",
						path: "/dashboard/drivers",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<circle
									cx="12"
									cy="12"
									r="3"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<path
									d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
								/>
							</svg>
						),
					},
					{
						label: "Ride Management",
						path: "/dashboard/rides",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 13h18M5 13l2.5-5a3 3 0 0 1 2.7-1.8H14a3 3 0 0 1 2.7 1.8L19 13"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M6 17h1M17 17h1"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
								/>
							</svg>
						),
					},
					{
						label: "Profile",
						path: "/dashboard/profile",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="12"
									cy="7"
									r="4"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
							</svg>
						),
					},
				];

			case "driver":
				return [
					{
						label: "Overview",
						path: "/dashboard",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<path
									d="M7 13.5 11 10l3 2 3-2.5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Available Rides",
						path: "/dashboard/available-rides",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12 2L2 7l10 5 10-5-10-5z"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 17l10 5 10-5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 12l10 5 10-5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Active Ride",
						path: "/dashboard/active-ride",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 13h18M5 13l2.5-5a3 3 0 0 1 2.7-1.8H14a3 3 0 0 1 2.7 1.8L19 13"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="6.5"
									cy="17"
									r="1.5"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<circle
									cx="17.5"
									cy="17"
									r="1.5"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
							</svg>
						),
					},
					{
						label: "Earnings",
						path: "/dashboard/earnings",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Ride History",
						path: "/dashboard/ride-history",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M4 7h16M4 12h16M4 17h10"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
								/>
							</svg>
						),
					},
					{
						label: "Profile",
						path: "/dashboard/profile",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="12"
									cy="7"
									r="4"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
							</svg>
						),
					},
				];

			case "rider":
			default:
				return [
					{
						label: "Profile",
						path: "/dashboard",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<path
									d="M7 13.5 11 10l3 2 3-2.5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Book A Ride",
						path: "/dashboard/book-ride",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 13h18M5 13l2.5-5a3 3 0 0 1 2.7-1.8H14a3 3 0 0 1 2.7 1.8L19 13M6 17h1M17 17h1"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						),
					},
					{
						label: "Active Ride",
						path: "/dashboard/active-ride",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 13h18M5 13l2.5-5a3 3 0 0 1 2.7-1.8H14a3 3 0 0 1 2.7 1.8L19 13"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="6.5"
									cy="17"
									r="1.5"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
								<circle
									cx="17.5"
									cy="17"
									r="1.5"
									stroke="currentColor"
									strokeWidth="1.6"
								/>
							</svg>
						),
					},
					{
						label: "Ride History",
						path: "/dashboard/ride-history",
						icon: (
							<svg
								className="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M4 7h16M4 12h16M4 17h10"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
								/>
							</svg>
						),
					},
				];
		}
	};

	const navigationLinks = getNavigationLinks();

	return (
		<aside className="flex flex-col min-h-screen w-72 border-r p-4 bg-sidebar text-sidebar-foreground border-sidebar-border">
			<div className="mb-6 flex items-center gap-3">
				<div>
					<h2 className="text-2xl font-semibold">ZipRide</h2>
					<h3 className="text-xl text-muted-foreground">Dashboard</h3>
				</div>
			</div>

			<nav>
				<ul className="mb-4 space-y-1">
					{navigationLinks.map((link, index) => (
						<li key={link.path}>
							<Link
								to={link.path}
								className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent ${
									index === 0 ? "bg-sidebar-accent" : ""
								}`}
							>
								{index === 0 && (
									<span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-sidebar-foreground" />
								)}
								<span
									className={`${
										index === 0
											? ""
											: "text-muted-foreground group-hover:text-sidebar-foreground"
									}`}
								>
									{link.icon}
								</span>
								<span>{link.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="mt-auto rounded-lg border p-3 bg-sidebar-accent border-sidebar-border">
				<div className="flex items-center gap-3">
					<span className="grid h-9 w-9 place-items-center rounded-full bg-sidebar-foreground text-2xl font-bold text-sidebar">
						{isAuthenticated
							? data.data.name.charAt(0).toUpperCase()
							: ""}
					</span>
					<div className="min-w-0 flex-1">
						<h3 className="truncate text-sm font-medium">
							{isAuthenticated ? data.data.name : ""}
						</h3>
						<h4 className="truncate text-xs text-muted-foreground">
							{isAuthenticated ? data.data.email : ""}
						</h4>
					</div>

					<Button
						asChild
						variant="outline"
						className="gap-2"
					>
						<Link to="/">
							<svg
								className="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 10.5 12 4l9 6.5"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5 10v10h14V10"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					</Button>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
