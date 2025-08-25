import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const Collaboration = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-bl from-background via-muted/80 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
					<CardContent className="p-8 sm:p-12 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
							<MessageCircle className="h-8 w-8 text-primary" />
						</div>

						<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
							Collaborate with ZipRide
						</h2>

						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Join us in revolutionizing transportation in
							Bangladesh. Let's work together to create a better
							future for urban mobility.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="group px-8 py-4 text-lg font-semibold"
								asChild
							>
								<Link
									to="/contact"
									className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
								>
									Get In Touch
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
								</Link>
							</Button>

							<Button
								variant="outline"
								size="lg"
								className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary/10"
								asChild
							>
								<a
									href="https://github.com/ctasbihas/zipride_frontend"
									target="_blank"
								>
									Learn More
								</a>
							</Button>
						</div>

						<div className="mt-8 pt-6 border-t border-border/50">
							<p className="text-muted-foreground">
								Reach out to us at{" "}
								<a
									href="mailto:ctasbihas+zipride@gmail.com"
									className="text-primary hover:underline font-semibold"
								>
									zipride@gmail.com
								</a>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Collaboration;
