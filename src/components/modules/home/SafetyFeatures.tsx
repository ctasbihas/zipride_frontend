import { Card, CardContent } from "@/components/ui/card";
import {
	Camera,
	Headset,
	Lock,
	PhoneCall,
	ShieldCheck,
	Star,
} from "lucide-react";

const SafetyFeatures = () => {
	const safetyItems = [
		{
			icon: <ShieldCheck className="h-10 w-10 text-primary" />,
			title: "Verified Drivers",
			description:
				"All drivers undergo thorough background checks and vehicle inspections before joining our platform.",
			highlight: "100% Verified",
		},
		{
			icon: <PhoneCall className="h-10 w-10 text-primary" />,
			title: "Emergency SOS",
			description:
				"One-tap emergency button connects you instantly to authorities and shares your real-time location.",
			highlight: "Instant Help",
		},
		{
			icon: <Camera className="h-10 w-10 text-primary" />,
			title: "Trip Recording",
			description:
				"GPS tracking and trip recording for complete transparency, safety and accountability.",
			highlight: "Live Tracking",
		},
		{
			icon: <Star className="h-10 w-10 text-primary" />,
			title: "Two-Way Ratings",
			description:
				"Both riders and drivers rate each other to maintain high community standards and trust.",
			highlight: "Community Trust",
		},
		{
			icon: <Lock className="h-10 w-10 text-primary" />,
			title: "Secure Payments",
			description:
				"End-to-end encrypted payment processing with no cash handling required for your security.",
			highlight: "Encrypted",
		},
		{
			icon: <Headset className="h-10 w-10 text-primary" />,
			title: "24/7 Support",
			description:
				"Round-the-clock dedicated safety team ready to assist you during any ride, anytime.",
			highlight: "Always Here",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-muted/70 via-transparent to-muted/70">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Your Safety is Our Priority
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						We've built multiple layers of protection to ensure
						every ride is secure, monitored, and backed by our
						dedicated safety team. Your peace of mind matters.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{safetyItems.map((item, index) => (
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
										{item.icon}
									</div>
								</div>
								<div className="mb-3">
									<span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-3">
										{item.highlight}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									{item.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default SafetyFeatures;
