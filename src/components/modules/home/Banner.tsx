"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const animationDuration = 2500;
const delayOffset = 100;
const carSize = 800;

const Banner = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [carPosition, setCarPosition] = useState(-50);
	const [showCar, setShowCar] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		if (!imageLoaded) return;

		const startTime = Date.now();
		const easeIn = (t: number) => t * t * t;

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const linearProgress = Math.min(elapsed / animationDuration, 1);
			const easedProgress = easeIn(linearProgress);
			const position = -50 + easedProgress * 200;

			setCarPosition(position);

			if (linearProgress < 1) {
				requestAnimationFrame(animate);
			} else {
				setTimeout(() => {
					setShowCar(false);
					setIsLoading(false);
				}, 100);
			}
		};

		animate();
	}, [imageLoaded]);

	const revealProgress = Math.max(
		0,
		Math.min(100, carPosition + 100 - delayOffset)
	);

	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
			{showCar && (
				<div
					className="absolute inset-y-0 z-[60] flex items-center pointer-events-none"
					style={{
						left: `${carPosition}%`,
						width: `${carSize}px`,
						flexShrink: 0,
					}}
				>
					<Image
						src="/bannerCar.png"
						alt="Car revealing content"
						width={carSize}
						height={carSize}
						className="object-fill flex-shrink-0"
						style={{
							height: `${carSize}px`,
							width: `${carSize}px`,
						}}
						onLoad={() => setImageLoaded(true)}
						priority
					/>
				</div>
			)}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl motion-safe:animate-blob"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl motion-safe:animate-blob motion-safe:[animation-delay:2.4s]"
			/>

			<div
				className="container mx-auto px-4 py-20 lg:py-32"
				style={{
					clipPath: isLoading
						? `inset(0 ${100 - revealProgress}% 0 0)`
						: "none",
				}}
			>
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
							<span className="block">Starts Here</span>
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
									href="/register"
									aria-label="Get started with ZipRide"
								>
									Get Started
									<ArrowRight
										aria-hidden="true"
										className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
									/>
								</Link>
							</Button>

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
						<Image
							src="/banner.jpg"
							alt="Seamless ride booking with the ZipRide app"
							width={200}
							height={150}
							className="aspect-[16/10] w-full rounded-3xl object-cover rotate-2 lg:rotate-3 shadow-2xl ring-1 ring-foreground/10 transition-transform duration-500 will-change-transform hover:scale-[1.01]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
