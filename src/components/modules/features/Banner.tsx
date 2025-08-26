import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Star, Users, Zap } from "lucide-react";

const Banner = () => {
	const featureHighlights = [
		{ icon: <Zap className="h-5 w-5" />, text: "Lightning Fast" },
		{ icon: <Shield className="h-5 w-5" />, text: "100% Secure" },
		{ icon: <Users className="h-5 w-5" />, text: "24/7 Support" },
		{ icon: <MapPin className="h-5 w-5" />, text: "Real-time Tracking" },
	];

	return (
		<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto">
					<Badge
						variant="secondary"
						className="mb-6 sm:mb-8 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20"
					>
						<Star className="h-4 w-4 mr-2" />
						Powerful Features
					</Badge>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
						Discover ZipRide's{" "}
						<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							Advanced Features
						</span>
					</h1>

					<p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
						Experience cutting-edge technology designed to make your
						rides safer, faster, and more convenient across
						Bangladesh.
					</p>

					<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
						{featureHighlights.map((feature, index) => (
							<div
								key={index}
								className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300"
							>
								<div className="text-primary">
									{feature.icon}
								</div>
								<span className="text-sm sm:text-base font-medium text-foreground">
									{feature.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
