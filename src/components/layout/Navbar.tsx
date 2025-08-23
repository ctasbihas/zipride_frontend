import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	authApi,
	useLogoutMutation,
	useUserQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { LogOut, Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { ThemeToggle } from "../ui/theme-toggle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isSuccess } = useUserQuery(undefined);
	const [logout] = useLogoutMutation();
	const isAuthenticated = isSuccess && data.success;
	const location = useLocation();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		try {
			await logout(undefined).unwrap();
			toast.success("Logged out successfully", {
				position: "top-center",
				richColors: true,
			});
		} catch (err) {
			toast.error("Failed to log out", {
				position: "top-center",
				richColors: true,
			});
			console.error(err);
		} finally {
			dispatch(authApi.util.resetApiState());
		}
	};

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		{ path: "/features", label: "Features" },
		{ path: "/contact", label: "Contact" },
		{ path: "/faq", label: "FAQ" },
	];

	const isActiveLink = (path: string) => {
		return location.pathname === path;
	};

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link
						to="/"
						className="text-xl font-bold"
					>
						ZipRide
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`text-sm font-medium transition-all hover:text-primary hover:border-b-2 border-primary ${
									isActiveLink(link.path)
										? "text-primary border-b-2"
										: "text-muted-foreground"
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="hidden md:flex items-center space-x-4">
						{isAuthenticated ? (
							<div className="flex items-center space-x-4">
								<Link to="/dashboard">
									<Button
										variant="outline"
										size="sm"
										className="hover-lift"
									>
										Dashboard
									</Button>
								</Link>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											className="relative h-10 w-10 rounded-full hover-lift"
										>
											<Avatar className="h-10 w-10">
												<AvatarFallback className="text-foreground font-semibold">
													{isAuthenticated &&
													data.data.name
														? data.data.name
																.charAt(0)
																.toUpperCase()
														: ""}
												</AvatarFallback>
											</Avatar>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-56"
										align="end"
										forceMount
									>
										<div className="flex flex-col space-y-1 p-2">
											<p className="text-sm font-medium leading-none">
												{isAuthenticated && data.data
													? data.data.name
													: ""}
											</p>
											<p className="text-xs leading-none text-muted-foreground">
												{isAuthenticated
													? data.data.email
													: ""}
											</p>
										</div>

										<DropdownMenuSeparator />
										<DropdownMenuItem
											onClick={handleLogout}
											className="text-destructive"
										>
											<LogOut className="mr-2 h-4 w-4" />
											Log out
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						) : (
							<Link to="/login">
								<Button
									variant="default"
									size="sm"
									className="hover-lift"
								>
									Login
								</Button>
							</Link>
						)}
						<ThemeToggle />
					</div>

					{/* Mobile menu button */}
					<div className="space-x-2 md:hidden">
						<ThemeToggle />
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden py-4 border-t border-border/50">
						<div className="flex flex-col space-y-3">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
										isActiveLink(link.path)
											? "bg-primary/10 text-primary"
											: "text-muted-foreground hover:bg-muted hover:text-foreground"
									}`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}

							<div className="border-t border-border/50 pt-3 mt-3">
								{isAuthenticated ? (
									<div className="space-y-3">
										<Link
											to={"/dashboard"}
											className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors"
											onClick={() => setIsOpen(false)}
										>
											<Shield className="mr-2 h-4 w-4" />
											Dashboard
										</Link>
										<button
											onClick={() => {
												handleLogout();
												setIsOpen(false);
											}}
											className="flex items-center w-full px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
										>
											<LogOut className="mr-2 h-4 w-4" />
											Log out
										</button>
									</div>
								) : (
									<div className="space-y-3">
										<Link
											to="/login"
											className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors"
											onClick={() => setIsOpen(false)}
										>
											Login
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
