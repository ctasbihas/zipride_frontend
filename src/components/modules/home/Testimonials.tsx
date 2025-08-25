import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Marketing Executive",
			image: "https://images.unsplash.com/photo-1494790108755-2616b612c7b1?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "ZipRide has completely changed how I commute to work. The drivers are professional, the app is super easy to use, and I always feel safe. Highly recommend!",
			location: "Dhaka",
		},
		{
			name: "Ahmed Rahman",
			role: "Software Developer",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "As a frequent traveler, I need reliable transportation. ZipRide has never let me down. Always on time, fair pricing, and excellent customer service.",
			location: "Chittagong",
		},
		{
			name: "Fatima Khan",
			role: "University Student",
			image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "The safety features give me peace of mind, especially when traveling alone at night. The SOS button and real-time tracking are game-changers.",
			location: "Sylhet",
		},
		{
			name: "Mohammad Ali",
			role: "Business Owner",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "I use ZipRide for all my business meetings. The professional drivers and clean vehicles always make a great impression on my clients.",
			location: "Rajshahi",
		},
		{
			name: "Dr. Rashida Begum",
			role: "Healthcare Professional",
			image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "Working long hours at the hospital, I appreciate the 24/7 availability. No matter what time my shift ends, there's always a ride available.",
			location: "Khulna",
		},
		{
			name: "Karim Hassan",
			role: "ZipRide Driver",
			image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face",
			rating: 5,
			text: "Being a ZipRide driver has been incredibly rewarding. The platform is fair to drivers, and I love meeting new people every day. Great support team too!",
			location: "Barisal",
		},
	];

	const renderStars = (rating: number) =>
		Array.from({ length: 5 }, (_, i) => (
			<Star
				key={i}
				className={`h-4 w-4 ${
					i < rating ? "text-yellow-400" : "text-gray-300"
				}`}
				fill={i < rating ? "currentColor" : "none"}
			/>
		));

	return (
		<section className="py-20 bg-gradient-to-b from-muted/70 via-background to-muted/70">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Words From Our Clients
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Don&apos;t just take our word for it. Here&apos;s what
						riders and drivers across Bangladesh are saying about
						their ZipRide experience.
					</p>
				</div>

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full mx-auto"
				>
					<CarouselContent>
						{testimonials.map((t, idx) => (
							<CarouselItem
								key={idx}
								className="basis-full sm:basis-1/2 md:basis-1/3"
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6 flex flex-col h-full select-none">
										<div className="flex items-center mb-3">
											{renderStars(t.rating)}
										</div>
										<p className="text-muted-foreground mb-4 text-sm leading-relaxed">
											{t.text.length > 160
												? `"${t.text.slice(0, 160)}..."`
												: `"${t.text}"`}
										</p>
										<div className="mt-auto flex items-center gap-3">
											<img
												src={t.image}
												alt={t.name}
												className="w-10 h-10 rounded-full object-cover border"
											/>
											<div>
												<h5 className="font-medium text-foreground text-sm">
													{t.name}
												</h5>
												<p className="text-xs text-muted-foreground">
													{t.role}
												</p>
												<p className="text-xs text-emerald-600 font-medium">
													{t.location}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* TODO: Fix the overflow */}
					{/* <CarouselPrevious />
					<CarouselNext /> */}
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;
