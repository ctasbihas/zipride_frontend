/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	useAcceptRideMutation,
	useAvailableRidesQuery,
} from "@/redux/features/ride/ride.api";
import { MapPin, User, Users } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const AvailableRides = () => {
	const { data } = useAvailableRidesQuery(undefined);
	const navigate = useNavigate();
	const [acceptRide] = useAcceptRideMutation();
	const rides = data?.data ?? [];

	const handleAccept = async (id: string) => {
		try {
			await acceptRide(id).unwrap();
			toast.success("Ride accepted successfully");
			navigate("/dashboard/active-ride");
		} catch (e: any) {
			toast.error(e.message || "Failed to accept ride");
		}
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-3xl">
				<CardHeader>
					<CardTitle>Available Rides</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					{rides.length === 0 ? (
						<div className="text-center text-muted-foreground py-12">
							No ride requests at the moment.
						</div>
					) : (
						rides.map((ride: any) => (
							<Card
								key={ride._id}
								className="border border-border/50 shadow-sm"
							>
								<CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4">
									<div className="flex-1 space-y-1">
										<div className="flex items-center gap-2">
											<User className="h-4 w-4 text-primary" />
											<span className="font-medium">
												Rider:
											</span>{" "}
											{ride.rider?.name}
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-primary" />
											<span className="font-medium">
												From:
											</span>{" "}
											{ride.from}
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-primary" />
											<span className="font-medium">
												To:
											</span>{" "}
											{ride.to}
										</div>
										<div className="flex items-center gap-2">
											<Users className="h-4 w-4 text-primary" />
											<span className="font-medium">
												Passengers:
											</span>{" "}
											{ride.passengers}
										</div>
										<div className="flex items-center gap-2">
											<span className="font-medium">
												Fare:
											</span>{" "}
											<span>৳{ride.fare}</span>
											<Badge variant="secondary">
												{ride.rideStatus}
											</Badge>
										</div>
									</div>
									<div className="flex flex-col gap-2 min-w-[120px]">
										<Button
											size="sm"
											variant="default"
											onClick={() =>
												handleAccept(ride._id)
											}
										>
											Accept
										</Button>
									</div>
								</CardContent>
							</Card>
						))
					)}
				</CardContent>
			</Card>
		</main>
	);
};

export default AvailableRides;
