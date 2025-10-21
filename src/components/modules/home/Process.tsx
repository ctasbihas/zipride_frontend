import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Navigation, UserPlus } from "lucide-react";
import Link from "next/link";

const Process = () => {
	const steps = [
		{
			icon: <UserPlus className="h-8 w-8 text-primary" />,
			title: "Create Account",
			description:
				"Sign up with your email. Get started with ZipRide's seamless transportation experience.",
			step: "01",
		},
		{
			icon: <MapPin className="h-8 w-8 text-primary" />,
			title: "Request for Ride",
			description:
				"Enter your pickup location and destination with fare total passengers.",
			step: "02",
		},
		{
			icon: <Car className="h-8 w-8 text-primary" />,
			title: "Go for Ride",
			description:
				"Wait for a driver to accept your request. Track your ride in real-time and enjoy a comfortable journey to your destination.",
			step: "03",
		},
		{
			icon: <Navigation className="h-8 w-8 text-primary" />,
			title: "Reach Your Destination",
			description:
				"Arrive safely at your destination. Complete payment automatically and rate your experience to help improve our service.",
			step: "04",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-muted/70 via-transparent to-muted/70">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
						ZipRide Working Process
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Getting around the city has never been easier. Book your
						ride in just a few taps and enjoy a seamless
						transportation experience.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{steps.map((step, index) => (
						<Card
							key={index}
							className="relative border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-in fade-in slide-in-from-bottom-4"
							style={{
								animationDelay: `${index * 100}ms`,
								animationDuration: "700ms",
							}}
						>
							<CardContent className="p-6 text-center">
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
										{step.step}
									</div>
								</div>
								<div className="mb-4 flex justify-center pt-2">
									<div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
										{step.icon}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{step.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{step.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
					<p className="text-muted-foreground mb-6">
						Ready to experience this crazy transportation?
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							size="lg"
							className="bg-primary hover:bg-primary/90 text-primary-foreground"
						>
							<Link href="/register">Start Riding Today</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
						>
							<Link href="/register?role=driver">
								Become a Driver
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
