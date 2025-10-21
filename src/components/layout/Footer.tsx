import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-card border-t border-border/50">
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link href="/">
							<Image
								src={"/ZipRide.png"}
								alt="ZipRide Logo"
								className="content-center"
								width={120}
								height={30}
							/>
						</Link>
						<p className="text-muted-foreground text-sm mt-2">
							Your trusted ride booking platform. Safe, reliable,
							and convenient transportation at your fingertips.
						</p>
						<div className="flex space-x-3">
							<a
								href="#"
								className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors hover-lift"
							>
								<Facebook className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors hover-lift"
							>
								<Twitter className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors hover-lift"
							>
								<Instagram className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors hover-lift"
							>
								<Linkedin className="h-4 w-4" />
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-foreground">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/features"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-foreground">
							Services
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/register"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Become a Rider
								</Link>
							</li>
							<li>
								<Link
									href="/register"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Drive with Us
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Business Solutions
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors text-sm"
								>
									Safety Guidelines
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-foreground">
							Contact Info
						</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<div className="p-2 bg-muted rounded-lg">
									<Phone className="h-4 w-4 text-muted-foreground" />
								</div>
								<div>
									<p className="text-sm font-medium">
										+88015953-73760
									</p>
									<p className="text-xs text-muted-foreground">
										24/7 Support
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="p-2 bg-muted rounded-lg">
									<Mail className="h-4 w-4 text-muted-foreground" />
								</div>
								<div>
									<p className="text-sm font-medium">
										support@zipride.com
									</p>
									<p className="text-xs text-muted-foreground">
										Email Support
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="p-2 bg-muted rounded-lg">
									<MapPin className="h-4 w-4 text-muted-foreground" />
								</div>
								<div>
									<p className="text-sm font-medium">
										123 Business Ave
									</p>
									<p className="text-xs text-muted-foreground">
										Dhaka, Bangladesh
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-border/50 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-muted-foreground">
							© {currentYear} ZipRide. All rights reserved.
						</p>
						<div className="flex space-x-6">
							<a
								href="#"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
