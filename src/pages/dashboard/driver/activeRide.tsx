import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, MapPin, User } from "lucide-react";
import { useState } from "react";

// TODO: Replace with real ride data from backend
const mockActiveRide = {
	status: "In Transit",
	driver: {
		vehicleLicense: "Dhaka Metro GA-1234",
		driver: {
			name: "John Doe",
		},
	},
	rider: {
		name: "SOmething",
		email: "something@example.com",
	},
	from: "Banani, Dhaka",
	to: "Dhanmondi, Dhaka",
	fare: 320,
};

const statusTimeline = ["Accepted", "Picked Up", "In Transit", "Completed"];

const nextStatus: Record<string, string | undefined> = {
	Accepted: "Picked Up",
	Picked_Up: "In Transit",
	In_Transit: "Completed",
};

const RiderActiveRide = () => {
	const [ride, setRide] = useState(mockActiveRide);

	const handleStatusUpdate = () => {
		const next = nextStatus[ride.status];
		if (next) setRide({ ...ride, status: next });
	};

	const handleCancel = () => {
		setRide({ ...ride, status: "Cancelled" });
	};

	const currentStatusIdx = statusTimeline.indexOf(ride.status);

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-2xl">
				<CardHeader>
					<CardTitle>Active Ride</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
						<div className="flex-1 space-y-2">
							<div className="flex items-center gap-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span className="font-medium">From:</span>
								<span>{ride.from}</span>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span className="font-medium">To:</span>
								<span>{ride.to}</span>
							</div>
							<div className="flex items-center gap-2">
								<User className="h-5 w-5 text-primary" />
								<span className="font-medium">Rider:</span>
								<span>{ride.rider.name}</span>
							</div>
							<div className="flex items-center gap-2">
								<Car className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Vehicle License:
								</span>
								<span>{ride.driver.vehicleLicense}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-medium">Fare:</span>
								<span>৳{ride.fare}</span>
								<Badge variant="secondary">{ride.status}</Badge>
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
										idx <= currentStatusIdx &&
										ride.status !== "Cancelled"
											? "bg-primary"
											: "bg-muted-foreground/30"
									}`}
								>
									{idx + 1}
								</div>
								<div
									className={`text-xs mt-1 ${
										idx <= currentStatusIdx &&
										ride.status !== "Cancelled"
											? "text-primary"
											: "text-muted-foreground"
									}`}
								>
									{status}
								</div>
								{idx < statusTimeline.length - 1 && (
									<div
										className={`h-1 w-full ${
											idx < currentStatusIdx &&
											ride.status !== "Cancelled"
												? "bg-primary"
												: "bg-muted-foreground/30"
										}`}
									></div>
								)}
							</div>
						))}
					</div>

					{ride.status !== "Completed" &&
						ride.status !== "Cancelled" && (
							<div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
								{nextStatus[
									ride.status as keyof typeof nextStatus
								] && (
									<Button
										size="lg"
										variant="default"
										onClick={handleStatusUpdate}
									>
										Mark as{" "}
										{
											nextStatus[
												ride.status as keyof typeof nextStatus
											]
										}
									</Button>
								)}
								<Button
									size="lg"
									variant="destructive"
									onClick={handleCancel}
								>
									Cancel Ride
								</Button>
							</div>
						)}

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

export default RiderActiveRide;
