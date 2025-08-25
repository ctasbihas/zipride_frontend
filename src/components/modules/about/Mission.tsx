import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target } from "lucide-react";

const Mission = () => {
	const missionValues = [
		{
			icon: <Target className="h-8 w-8 text-primary" />,
			title: "Our Mission",
			description:
				"To democratize transportation by providing safe, reliable, and affordable ride-sharing services that connect communities across Bangladesh.",
			color: "from-primary/10 to-primary/5",
		},
		{
			icon: <Heart className="h-8 w-8 text-destructive" />,
			title: "Our Vision",
			description:
				"To become Bangladesh's most trusted transportation platform, fostering sustainable urban mobility while empowering drivers and delighting riders.",
			color: "from-destructive/10 to-destructive/5",
		},
	];

	return (
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-bl from-background via-muted/80 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Mission & Vision */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
					{missionValues.map((item, index) => (
						<Card
							key={index}
							className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
						>
							<CardContent className="p-6 sm:p-7 md:p-8 lg:p-10">
								<div
									className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-bl ${item.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									{item.icon}
								</div>
								<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
									{item.title}
								</h3>
								<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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

export default Mission;
