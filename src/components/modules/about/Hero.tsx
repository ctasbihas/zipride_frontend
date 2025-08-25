import { Button } from "@/components/ui/button";
import { Car, MapPin, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
	// TODO: Get the actual valid data
	const highlights = [
		{
			icon: <Users className="h-6 w-6" />,
			value: "150+",
			label: "Active Users",
		},
		{
			icon: <Car className="h-6 w-6" />,
			value: "12+",
			label: "Drivers",
		},
		{
			icon: <MapPin className="h-6 w-6" />,
			value: "8+",
			label: "Cities",
		},
		{
			icon: <TrendingUp className="h-6 w-6" />,
			value: "25+",
			label: "Trips",
		},
	];
	return (
		<section className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">
			<div className="mx-auto container px-4">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-7xl font-black text-foreground leading-tight">
								Move with
								<span className="block text-primary">
									ZipRide
								</span>
							</h1>

							<p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
								We're revolutionizing transportation in
								Bangladesh by connecting communities through
								smart, reliable, and affordable mobility
								solutions.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{highlights.map((stat, index) => (
								<div
									key={index}
									className="text-center p-4 rounded-xl glass-card"
								>
									<div className="flex justify-center mb-2 text-primary">
										{stat.icon}
									</div>
									<div className="text-2xl font-bold text-foreground">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<Link to="/register">Get Started Today</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="border-2 border-primary text-primary hover:bg-accent px-8 py-4 text-lg font-semibold rounded-full"
							>
								<Link to="/contact">Learn More</Link>
							</Button>
						</div>
					</div>

					<div className="relative">
						<div className="glass-card p-8 rounded-2xl shadow-2xl">
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
										<Car className="h-6 w-6 text-primary-foreground" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground">
											Founded in 2025
										</h3>
										<p className="text-muted-foreground">
											Born in Dhaka, Bangladesh
										</p>
									</div>
								</div>

								<div className="space-y-4">
									<h4 className="text-xl font-bold text-foreground">
										Our Journey
									</h4>
									<div className="space-y-3 text-muted-foreground">
										<p className="flex items-start gap-3">
											<span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
											Started with a vision to solve
											Bangladesh's transportation
											challenges
										</p>
										<p className="flex items-start gap-3">
											<span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
											Expanded from Dhaka to 3 cities
											nationwide
										</p>
										<p className="flex items-start gap-3">
											<span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
											Built a community of 20 riders and
											10 drivers
										</p>
										<p className="flex items-start gap-3">
											<span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
											Completed over 25 safe and reliable
											rides
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg hidden sm:flex items-center justify-center transform rotate-12">
							<MapPin className="h-10 w-10 text-primary-foreground" />
						</div>

						<div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full shadow-lg hidden sm:flex items-center justify-center">
							<Users className="h-8 w-8 text-accent-foreground" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
