/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	useActiveRideQuery,
	useUpdateRideStatusMutation,
} from "@/redux/features/ride/ride.api";
import { Car, MapPin, User } from "lucide-react";

type RideStatus =
	| "pending"
	| "accepted"
	| "picked_up"
	| "in_transit"
	| "completed"
	| "cancelled"
	| "rejected";

const statusTimeline: RideStatus[] = [
	"pending",
	"accepted",
	"picked_up",
	"in_transit",
	"completed",
	"cancelled",
	"rejected",
];

const DriverActiveRide = () => {
	const { data, isLoading, refetch } = useActiveRideQuery(undefined);
	const [updateStatus, { isLoading: isUpdating }] =
		useUpdateRideStatusMutation();

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
	const currentStatus: RideStatus = ride.rideStatus;
	const currentStatusIdx = statusTimeline.findIndex(
		(status) => status === currentStatus
	);

	// Handler to update to next status
	const handleNextStatus = async () => {
		// Only allow next if not at or past 'completed', 'cancelled', or 'rejected'
		if (
			currentStatusIdx !== -1 &&
			currentStatusIdx < statusTimeline.length - 3 &&
			!["completed", "cancelled", "rejected"].includes(currentStatus)
		) {
			const nextStatus = statusTimeline[currentStatusIdx + 1];
			await updateStatus({ id: ride._id, rideStatus: nextStatus });
			refetch();
		}
	};

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
							{/* ...existing code... */}
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
								<span>
									{ride.rider?.name} ({ride.rider?.email})
								</span>
							</div>
							<div className="flex items-center gap-2">
								<User className="h-5 w-5 text-primary" />
								<span className="font-medium">Driver:</span>
								<span>
									{ride.driver?.name} ({ride.driver?.email})
								</span>
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
							{/* Next Status Button */}
							<div className="mt-4">
								<Button
									onClick={handleNextStatus}
									variant={"ghost"}
									disabled={
										isUpdating ||
										currentStatusIdx === -1 ||
										currentStatusIdx >=
											statusTimeline.length - 3 ||
										[
											"cancelled",
											"completed",
											"rejected",
										].includes(currentStatus)
									}
								>
									{isUpdating
										? "Updating..."
										: statusTimeline[currentStatusIdx + 1]
										? `Mark as '${statusTimeline[
												currentStatusIdx + 1
										  ]
												.replace(/_/g, " ")
												.replace(/\b\w/g, (c) =>
													c.toUpperCase()
												)}'`
										: "No further status"}
								</Button>
							</div>
						</div>
					</div>

					{/* Status Timeline */}
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
									{status
										.replace(/_/g, " ")
										.replace(/\b\w/g, (c) =>
											c.toUpperCase()
										)}
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

					{/* Status History */}
					<div className="mt-8">
						<h3 className="font-semibold mb-2">Status History</h3>
						<ul className="space-y-1">
							{ride.statusHistory?.map(
								(item: any, idx: number) => (
									<li
										key={idx}
										className="flex items-center gap-2 text-sm"
									>
										<Badge variant="outline">
											{item.status}
										</Badge>
										<span>
											{new Date(
												item.timestamp
											).toLocaleString()}
										</span>
									</li>
								)
							)}
						</ul>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default DriverActiveRide;
