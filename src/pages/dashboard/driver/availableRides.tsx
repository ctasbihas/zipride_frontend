import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, User, Users } from "lucide-react";

// TODO: Replace with real data from backend
const mockAvailableRides = [
	{
		id: "REQ1001",
		rider: "Ayesha Siddiqua",
		pickup: "Gulshan 2",
		destination: "Banani",
		fare: 250,
		passengers: 2,
		status: "Pending",
	},
	{
		id: "REQ1002",
		rider: "Imran Hossain",
		pickup: "Dhanmondi 27",
		destination: "Mirpur 10",
		fare: 320,
		passengers: 1,
		status: "Pending",
	},
	{
		id: "REQ1003",
		rider: "Fatema Begum",
		pickup: "Uttara Sector 7",
		destination: "Bashundhara",
		fare: 400,
		passengers: 3,
		status: "Pending",
	},
];

const AvailableRides = () => {
	// Accept/Reject handlers (to be implemented)
	const handleAccept = (id: string) => {
		// TODO: Integrate with backend
		alert(`Accepted ride ${id}`);
	};
	const handleReject = (id: string) => {
		// TODO: Integrate with backend
		alert(`Rejected ride ${id}`);
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-3xl">
				<CardHeader>
					<CardTitle>Available Rides</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					{mockAvailableRides.length === 0 ? (
						<div className="text-center text-muted-foreground py-12">
							No ride requests at the moment.
						</div>
					) : (
						mockAvailableRides.map((ride) => (
							<Card
								key={ride.id}
								className="border border-border/50 shadow-sm"
							>
								<CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4">
									<div className="flex-1 space-y-1">
										<div className="flex items-center gap-2">
											<User className="h-4 w-4 text-primary" />
											<span className="font-medium">
												Rider:
											</span>{" "}
											{ride.rider}
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-primary" />
											<span className="font-medium">
												From:
											</span>{" "}
											{ride.pickup}
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-primary" />
											<span className="font-medium">
												To:
											</span>{" "}
											{ride.destination}
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
												{ride.status}
											</Badge>
										</div>
									</div>
									<div className="flex flex-col gap-2 min-w-[120px]">
										<Button
											size="sm"
											variant="default"
											onClick={() =>
												handleAccept(ride.id)
											}
										>
											Accept
										</Button>
										<Button
											size="sm"
											variant="outline"
											onClick={() =>
												handleReject(ride.id)
											}
										>
											Reject
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
