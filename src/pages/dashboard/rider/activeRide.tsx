import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActiveRideQuery } from "@/redux/features/ride/ride.api";
import { Car, MapPin, User } from "lucide-react";

// Update status timeline to match backend statuses
const statusTimeline = [
	"pending",
	"cancelled",
	"accepted",
	"picked up",
	"in transit",
	"completed",
];

const RiderActiveRide = () => {
	const { data, isLoading } = useActiveRideQuery(undefined);

	if (isLoading) {
		return <div className="flex justify-center py-8">Loading...</div>;
	}

	if (!data?.data) {
		return (
			<div className="flex justify-center py-8">
				No active ride found.
			</div>
		);
	}

	const ride = data.data;
	const currentStatus = ride.rideStatus?.toLowerCase() || "";
	const currentStatusIdx = statusTimeline.findIndex(
		(status) => status === currentStatus
	);

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
								<span>{ride.rider?.name}</span>
							</div>
							<div className="flex items-center gap-2">
								<Car className="h-5 w-5 text-primary" />
								<span className="font-medium">Passengers:</span>
								<span>{ride.passengers}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-medium">Fare:</span>
								<span>৳{ride.fare}</span>
								<Badge variant="secondary">
									{ride.rideStatus}
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
									{status.charAt(0).toUpperCase() +
										status.slice(1)}
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

					{/* TODO: Add SOS later */}
					{/* <div className="flex justify-center mt-8">
						<Button
							size="lg"
							variant="destructive"
							className="rounded-full px-8 py-4 shadow-lg"
						>
							SOS / Emergency
						</Button>
					</div> */}
				</CardContent>
			</Card>
		</main>
	);
};

export default RiderActiveRide;
