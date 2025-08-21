import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	// TODO: Get the current user data.
	const isAuthenticated = false;
	const user = {
		name: "Test Rider",
		email: "testrider@zipride.com",
		role: "rider",
		isBlocked: false,
	};

	const handleLogout = () => {
		console.log("TODO: Logout");
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
						{isAuthenticated && user ? (
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
												<AvatarFallback className="bg-gradient-primary text-white font-semibold">
													{user.name
														.charAt(0)
														.toUpperCase()}
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
												{user.name}
											</p>
											<p className="text-xs leading-none text-muted-foreground">
												{user.email}
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
							<div className="flex items-center space-x-3">
								<Link to="/login">
									<Button
										variant="default"
										size="sm"
										className="hover-lift"
									>
										Login
									</Button>
								</Link>
							</div>
						)}
					</div>

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</Button>
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
								{isAuthenticated && user ? (
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
