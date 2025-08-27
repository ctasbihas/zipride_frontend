import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Car, DollarSign, History, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// TODO: Data from backend
const stats = [
	{
		label: "Total Rides",
		value: 120, // TODO: Replace with real data
		icon: <Car className="h-6 w-6 text-primary" />,
	},
	{
		label: "Total Earnings",
		value: "৳ 25,000", // TODO: Replace with real data
		icon: <DollarSign className="h-6 w-6 text-primary" />,
	},
	{
		label: "Last Ride",
		value: "Today", // TODO: Replace with real data
		icon: <History className="h-6 w-6 text-primary" />,
	},
];

const DriverOverview = () => {
	const [isOnline, setIsOnline] = useState(true);

	return (
		<main className="py-8 px-4">
			<h1 className="text-2xl font-bold mb-6">Welcome, Driver!</h1>
			<div className="flex items-center gap-4 mb-8">
				<Switch
					checked={isOnline}
					onCheckedChange={setIsOnline}
					id="online-toggle"
				/>
				<label
					htmlFor="online-toggle"
					className="font-medium"
				>
					{isOnline
						? "Online (Accepting rides)"
						: "Offline (Not accepting rides)"}
				</label>
			</div>
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
								<Link to="/dashboard/available-rides">
									View Available Rides
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

			<Card>
				<CardContent className="p-6 text-center">
					<User className="mx-auto h-12 w-12 text-primary mb-2" />
					<div className="text-lg font-semibold">
						Drive safe and earn more with ZipRide!
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default DriverOverview;
