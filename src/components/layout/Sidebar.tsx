import { useUserQuery } from "@/redux/features/auth/auth.api";
import { getNavigationLinks } from "@/utils/SidebarItems";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

type UserData = {
	data: {
		success: boolean;
		statusCode: number;
		message: string;
		data: {
			_id: string;
			name: string;
			email: string;
			role: string;
			isBlocked: boolean;
		};
	};
	isLoading: boolean;
};

const Sidebar = () => {
	const { data, isLoading } = useUserQuery<UserData>(undefined);
	const { pathname } = useLocation();

	const navigationLinks = getNavigationLinks(data?.data?.role || "");

	return (
		<aside className="flex flex-col min-h-screen min-w-60 border-r p-4 bg-sidebar text-sidebar-foreground border-sidebar-border">
			<div className="mb-6 flex items-center gap-3">
				<div>
					<h2 className="text-2xl font-semibold">ZipRide</h2>
					<h3 className="text-xl text-muted-foreground">Dashboard</h3>
				</div>
			</div>

			<nav>
				<ul className="mb-4 space-y-1">
					{!isLoading ? (
						navigationLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent ${
										pathname === link.path
											? "bg-sidebar-accent"
											: ""
									}`}
								>
									{pathname === link.path && (
										<span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-sidebar-foreground" />
									)}
									<span
										className={`${
											pathname === link.path
												? ""
												: "text-muted-foreground group-hover:text-sidebar-foreground"
										}`}
									>
										{link.icon}
									</span>
									<span>{link.label}</span>
								</Link>
							</li>
						))
					) : (
						<>
							{[...Array(4)].map((_, i) => (
								<li key={i}>
									<div className="flex items-center gap-3 rounded-lg px-3 py-2">
										<Skeleton className="h-7 w-7 rounded-xl" />
										<Skeleton className="h-7 w-full rounded-xl" />
									</div>
								</li>
							))}
						</>
					)}
					<Separator className="my-2" />
					<Button
						asChild
						variant={"ghost"}
						className="w-full justify-start"
					>
						<Link to="/">
							<Home className="h-4 w-4" /> Home
						</Link>
					</Button>
				</ul>
			</nav>

			<div className="mt-auto rounded-lg border p-3 bg-sidebar-accent border-sidebar-border">
				<div className="flex items-center gap-3">
					{isLoading ? (
						<Skeleton className="h-9 w-9 rounded-full bg-sidebar-foreground" />
					) : (
						<span className="grid h-9 w-9 place-items-center rounded-full bg-sidebar-foreground text-2xl font-bold text-sidebar">
							{data?.data?.name.charAt(0).toUpperCase()}
						</span>
					)}
					<div className="min-w-0 flex-1">
						{isLoading ? (
							<>
								<Skeleton className="h-4 w-full bg-sidebar mb-1 rounded" />
								<Skeleton className="h-3 w-full bg-sidebar rounded" />
							</>
						) : (
							<>
								<h3 className="truncate text-sm font-medium">
									{data?.data?.name}
								</h3>
								<h4 className="truncate text-xs text-muted-foreground">
									{data?.data?.email}
								</h4>
							</>
						)}
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
