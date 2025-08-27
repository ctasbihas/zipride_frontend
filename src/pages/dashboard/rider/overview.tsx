import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

// TODO: Get data from server
const stats = [
	{
		label: "Total Rides",
		value: 25,
		icon: <Car className="h-6 w-6 text-primary" />,
	},
	{
		label: "Active Ride",
		value: "None",
		icon: <Car className="h-6 w-6 text-primary" />,
	},
];

const RiderOverview = () => {
	return (
		<main className="py-8 px-4">
			<h1 className="text-2xl font-bold mb-6">
				Welcome to your Dashboard
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{stats.map((stat, idx) => (
					<Card
						key={idx}
						className="shadow-sm"
					>
						<CardContent className="flex items-center gap-4 p-6">
							<div className="rounded-full bg-primary/10 p-3">
								{stat.icon}
							</div>
							<div>
								<div className="text-2xl font-bold">
									{stat.value}
								</div>
								<div className="text-muted-foreground text-sm">
									{stat.label}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
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
								<Link to="/dashboard/book-ride">
									Book a Ride
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
							>
								<Link to="/dashboard/ride-history">
									View Ride History
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="secondary"
							>
								<Link to="/dashboard/profile">
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
