"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMyRidesQuery } from "@/redux/features/ride/ride.api";
import { Car } from "lucide-react";
import Link from "next/link";

const RiderOverview = () => {
	const { data } = useMyRidesQuery(undefined);

	const totalRides = data?.data?.length || 0;

	return (
		<main className="py-8 px-4">
			<h1 className="text-2xl font-bold mb-6">
				Welcome to your Dashboard
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<Card className="shadow-sm">
					<CardContent className="flex items-center gap-4 p-6">
						<div className="rounded-full bg-primary/10 p-3">
							<Car className="h-6 w-6 text-primary" />
						</div>
						<div>
							<div className="text-2xl font-bold">
								{totalRides}
							</div>
							<div className="text-muted-foreground text-sm">
								Total RIdes
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				<Card>
					<CardContent className="p-6 flex flex-col gap-4">
						<h2 className="text-lg font-semibold mb-2">
							Quick Actions
						</h2>
						<div className="flex flex-wrap gap-4">
							<Button
								asChild
								size="lg"
								variant="default"
							>
								<Link href="/dashboard/book-ride">
									Book a Ride
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
							>
								<Link href="/dashboard/ride-history">
									View Ride History
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="secondary"
							>
								<Link href="/dashboard/profile">
									Edit Profile
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
};

export default RiderOverview;
