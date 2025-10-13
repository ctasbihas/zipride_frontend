import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Download, MapPin, Smartphone, Star, Zap } from "lucide-react";

const AppShowcase = () => {
	const features = [
		{
			icon: <Zap className="h-5 w-5" />,
			title: "Instant Booking",
			description: "Book a ride in seconds",
		},
		{
			icon: <MapPin className="h-5 w-5" />,
			title: "Live Tracking",
			description: "Real-time driver location",
		},
		{
			icon: <Star className="h-5 w-5" />,
			title: "Cashless Payment",
			description: "Secure in-app payments",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-muted/70 via-transparent to-muted/70">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="text-center lg:text-left animate-in fade-in slide-in-from-left-3 duration-700">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
							Download the ZipRide App
						</h2>
						<p className="text-lg text-muted-foreground max-w-xl mb-8">
							Experience seamless transportation at your
							fingertips. Book rides, track drivers, and manage
							payments all from one powerful app.
						</p>

						{/* Feature Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mb-8">
							{features.map((feature, index) => (
								<Card
									key={index}
									className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
									style={{
										animationDelay: `${index * 100}ms`,
										animationDuration: "700ms",
									}}
								>
									<CardContent className="p-4 flex items-center gap-4">
										<div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
											{feature.icon}
										</div>
										<div className="text-left">
											<h3 className="font-semibold text-foreground mb-1">
												{feature.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{feature.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* App Store Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
							<Button
								size="lg"
								className="group bg-foreground hover:bg-foreground/90 text-background h-14 px-6 rounded-xl"
							>
								<Apple className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
								<div className="text-left">
									<div className="text-xs">
										Download on the
									</div>
									<div className="text-base font-semibold">
										App Store
									</div>
								</div>
							</Button>

							<Button
								size="lg"
								variant="outline"
								className="group border-2 h-14 px-6 rounded-xl hover:bg-foreground/5"
							>
								<Download className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
								<div className="text-left">
									<div className="text-xs">GET IT ON</div>
									<div className="text-base font-semibold">
										Google Play
									</div>
								</div>
							</Button>
						</div>

						{/* App Stats */}
						<div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
								<span className="font-semibold text-foreground">
									4.8
								</span>
								<span>Rating</span>
							</div>
							<div className="hidden sm:block h-5 w-px bg-border" />
							<div className="flex items-center gap-2">
								<Download className="h-5 w-5 text-primary" />
								<span className="font-semibold text-foreground">
									10K+
								</span>
								<span>Downloads</span>
							</div>
							<div className="hidden sm:block h-5 w-px bg-border" />
							<div className="flex items-center gap-2">
								<Smartphone className="h-5 w-5 text-primary" />
								<span className="font-semibold text-foreground">
									&lt;5MB
								</span>
								<span>Size</span>
							</div>
						</div>
					</div>

					{/* Right Phone Mockup */}
					<div className="relative flex justify-center animate-in fade-in slide-in-from-right-3 duration-700">
						<div className="relative">
							{/* Phone Frame */}
							<div className="relative w-[280px] h-[560px] bg-gradient-to-br from-foreground to-foreground/80 rounded-[3rem] p-3 shadow-2xl border-8 border-foreground/20">
								<div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[2.5rem] overflow-hidden">
									{/* Phone Notch */}
									<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl" />

									{/* App Screenshot Placeholder */}
									<div className="p-6 pt-12">
										<div className="space-y-4">
											{/* Top Bar */}
											<div className="flex items-center justify-between">
												<div className="h-8 w-24 bg-primary/30 rounded-lg" />
												<div className="h-8 w-8 bg-primary/30 rounded-full" />
											</div>

											{/* Map Area */}
											<div className="h-64 bg-primary/20 rounded-2xl relative overflow-hidden">
												<div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
												<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
													<MapPin className="h-12 w-12 text-primary animate-bounce" />
												</div>
											</div>

											{/* Bottom Card */}
											<div className="bg-background/80 backdrop-blur rounded-2xl p-4 space-y-3">
												<div className="h-4 w-3/4 bg-foreground/20 rounded" />
												<div className="h-4 w-1/2 bg-foreground/20 rounded" />
												<div className="h-10 bg-primary/80 rounded-lg" />
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating Feature Cards */}
							<Card className="absolute -left-8 top-24 w-40 animate-float border-2 shadow-lg">
								<CardContent className="p-3">
									<div className="flex items-center gap-2">
										<div className="p-2 bg-green-500/10 rounded-full">
											<Zap className="h-4 w-4 text-green-600" />
										</div>
										<div>
											<p className="text-xs font-semibold">
												Quick Booking
											</p>
											<p className="text-[10px] text-muted-foreground">
												In 3 seconds
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="absolute -right-8 top-40 w-40 animate-float [animation-delay:0.5s] border-2 shadow-lg">
								<CardContent className="p-3">
									<div className="flex items-center gap-2">
										<div className="p-2 bg-blue-500/10 rounded-full">
											<Star className="h-4 w-4 text-blue-600" />
										</div>
										<div>
											<p className="text-xs font-semibold">
												Rated 4.8
											</p>
											<p className="text-[10px] text-muted-foreground">
												Trusted by many
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Decorative Elements */}
							<div className="absolute -z-10 -top-12 -right-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
							<div className="absolute -z-10 -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
