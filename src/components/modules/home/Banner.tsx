import BannerImage from "@/assets/banner.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

const Banner = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl motion-safe:animate-blob"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl motion-safe:animate-blob motion-safe:[animation-delay:1.2s]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl motion-safe:animate-blob motion-safe:[animation-delay:2.4s]"
			/>

			<div className="container mx-auto px-4 py-20 lg:py-32">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="text-center lg:text-left animate-in fade-in slide-in-from-bottom-2 duration-700 space-y-4">
						<Badge
							aria-label="ZipRide now serving Bangladesh"
							className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-700 ring-1 ring-emerald-400/20 backdrop-blur hover:bg-emerald-500/15 dark:text-emerald-300"
						>
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
							</span>
							Now Serving Bangladesh
						</Badge>

						<h1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
							Your Journey
							<span className="block gradient-text-secondary">
								Starts Here
							</span>
						</h1>

						<p className="mx-auto max-w-lg text-xl text-foreground/90 lg:mx-0">
							Experience the future of transportation with
							ZipRide. Safe, reliable, and convenient rides at
							your fingertips.
						</p>

						<div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
							<Button
								asChild
								size="lg"
								className="group relative h-12 rounded-full px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/25 ring-1 ring-emerald-400/40 focus-visible:ring-2 focus-visible:ring-emerald-500/60"
							>
								<Link
									to="/register"
									aria-label="Get started with ZipRide"
								>
									Get Started
									<ArrowRight
										aria-hidden="true"
										className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
									/>
								</Link>
							</Button>

							{/* TODO: Show a video of the ZipRide app */}
							<Button
								size="lg"
								variant="outline"
								type="button"
								aria-label="Watch ZipRide demo"
								className="group relative h-12 overflow-hidden rounded-full border-2 border-foreground/20 bg-background/60 px-6 text-foreground backdrop-blur hover:bg-background/80"
							>
								<span
									aria-hidden="true"
									className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent motion-safe:animate-shimmer"
								/>
								<Play
									aria-hidden="true"
									className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
								/>
								Watch Demo
							</Button>
						</div>
					</div>

					<div className="relative motion-safe:animate-float animate-in fade-in slide-in-from-bottom-2 duration-700">
						<img
							src={BannerImage}
							alt="Seamless ride booking with the ZipRide app"
							loading="eager"
							decoding="async"
							fetchPriority="high"
							className="aspect-[16/10] w-full rounded-3xl object-cover rotate-2 lg:rotate-3 shadow-2xl ring-1 ring-foreground/10 transition-transform duration-500 will-change-transform hover:scale-[1.01]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
