import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, MapPin, User } from "lucide-react";

// TODO: Replace with real ride data from backend
const activeRide = {
	status: "In Transit",
	driver: {
		vehicleLicense: "Dhaka Metro GA-1234",
		driver: {
			name: "John Doe",
		},
	},
	from: "Banani, Dhaka",
	to: "Dhanmondi, Dhaka",
	fare: 320,
};

const statusTimeline = [
	"Pending",
	"Cancelled",
	"Accepted",
	"Picked Up",
	"In Transit",
	"Completed",
];

const ActiveRide = () => {
	const currentStatusIdx = statusTimeline.indexOf(activeRide.status);

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-2xl">
				<CardHeader>
					<CardTitle>Active Ride</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					{/* Ride Info */}
					<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
						<div className="flex-1 space-y-2">
							<div className="flex items-center gap-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span className="font-medium">From:</span>
								<span>{activeRide.from}</span>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span className="font-medium">To:</span>
								<span>{activeRide.to}</span>
							</div>
							<div className="flex items-center gap-2">
								<User className="h-5 w-5 text-primary" />
								<span className="font-medium">Driver:</span>
								<span>{activeRide.driver.driver.name}</span>
							</div>

							<div className="flex items-center gap-2">
								<Car className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Vehicle License:
								</span>
								<span>{activeRide.driver.vehicleLicense}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-medium">Fare:</span>
								<span>৳{activeRide.fare}</span>
								<Badge variant="secondary">
									{activeRide.status}
								</Badge>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between gap-2 mt-6">
						{statusTimeline.map((status, idx) => (
							<div
								key={status}
								className="flex-1 flex flex-col items-center"
							>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
										idx <= currentStatusIdx
											? "bg-primary"
											: "bg-muted-foreground/30"
									}`}
								>
									{idx + 1}
								</div>
								<div
									className={`text-xs mt-1 ${
										idx <= currentStatusIdx
											? "text-primary"
											: "text-muted-foreground"
									}`}
								>
									{status}
								</div>
								{idx < statusTimeline.length - 1 && (
									<div
										className={`h-1 w-full ${
											idx < currentStatusIdx
												? "bg-primary"
												: "bg-muted-foreground/30"
										}`}
									></div>
								)}
							</div>
						))}
					</div>

					<div className="flex justify-center mt-8">
						<Button
							size="lg"
							variant="destructive"
							className="rounded-full px-8 py-4 shadow-lg"
						>
							{/* TODO: Implement SOS logic */}
							SOS / Emergency
						</Button>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default ActiveRide;
