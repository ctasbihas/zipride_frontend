import { Card, CardContent } from "@/components/ui/card";
import {
	Clock,
	DollarSign,
	Headphones,
	Shield,
	Smartphone,
	Users,
} from "lucide-react";

const ServiceHighlights = () => {
	const features = [
		{
			icon: <Shield className="h-10 w-10 text-primary" />,
			title: "Safe & Secure",
			description:
				"All drivers are verified with background checks. Real-time tracking and emergency SOS feature for your safety.",
			highlight: "24/7 Safety",
		},
		{
			icon: <Clock className="h-10 w-10 text-primary" />,
			title: "Always Available",
			description:
				"Round-the-clock service with drivers available anytime, anywhere in the city. No more waiting for rides.",
			highlight: "24/7 Service",
		},
		{
			icon: <DollarSign className="h-10 w-10 text-primary" />,
			title: "Transparent Pricing",
			description:
				"No hidden fees or surge pricing surprises. See your fare upfront and pay securely through the app.",
			highlight: "Fair Pricing",
		},
		{
			icon: <Users className="h-10 w-10 text-primary" />,
			title: "Professional Drivers",
			description:
				"Experienced, courteous drivers who know the city well. Rated and reviewed by our community.",
			highlight: "5-Star Drivers",
		},
		{
			icon: <Smartphone className="h-10 w-10 text-primary" />,
			title: "Easy to Use",
			description:
				"Intuitive app design makes booking a ride simple. Book in just 3 taps and track your driver in real-time.",
			highlight: "3-Tap Booking",
		},
		{
			icon: <Headphones className="h-10 w-10 text-primary" />,
			title: "24/7 Support",
			description:
				"Our customer support team is always ready to help with any questions or issues you might have.",
			highlight: "Live Support",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-muted/70 via-transparent to-muted/70">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Why Choose ZipRide?
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						We're not just another ride-sharing app. We're your
						trusted transportation partner, committed to providing
						safe, reliable, and affordable rides across the city.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
							style={{
								animationDelay: `${index * 100}ms`,
								animationDuration: "700ms",
							}}
						>
							<CardContent className="p-8 text-center">
								<div className="mb-6 flex justify-center">
									<div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
										{feature.icon}
									</div>
								</div>
								<div className="mb-3">
									<span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-3">
										{feature.highlight}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									{feature.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceHighlights;
