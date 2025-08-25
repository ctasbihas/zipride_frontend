import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CallToAction = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-muted/70 via-background to-muted/70">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
					Ride Smarter. Earn Faster.
				</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto mb-8">
					Join ZipRide today—book trips in seconds or start driving on
					your schedule.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						asChild
						size="lg"
						className="group"
					>
						<Link to="/register?role=rider">
							Get Started as Rider
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>

					<Button
						asChild
						size="lg"
						variant="outline"
						className="group"
					>
						<Link to="/register?role=driver">
							Start Driving
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
