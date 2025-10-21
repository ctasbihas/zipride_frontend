import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Ride {
	id: string;
	date: string;
	from: string;
	to: string;
	fare: number;
	status: string;
}

interface RideHistoryTableProps {
	rides: Ride[];
}

const RideHistoryTable = ({ rides }: RideHistoryTableProps) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full text-sm">
				<thead>
					<tr className="border-b">
						<th className="py-2 px-3 text-left">Date</th>
						<th className="py-2 px-3 text-left">From</th>
						<th className="py-2 px-3 text-left">To</th>
						<th className="py-2 px-3 text-left">Fare (৳)</th>
						<th className="py-2 px-3 text-left">Status</th>
						<th className="py-2 px-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					{rides.length === 0 ? (
						<tr>
							<td
								colSpan={6}
								className="text-center py-6 text-muted-foreground"
							>
								No rides found.
							</td>
						</tr>
					) : (
						rides.map((ride) => (
							<tr
								key={ride.id}
								className="border-b hover:bg-muted/30"
							>
								<td className="py-2 px-3">{ride.date}</td>
								<td className="py-2 px-3">{ride.from}</td>
								<td className="py-2 px-3">{ride.to}</td>
								<td className="py-2 px-3">{ride.fare}</td>
								<td className="py-2 px-3">
									<Badge
										variant={
											ride.status === "Completed"
												? "default"
												: "destructive"
										}
									>
										{ride.status}
									</Badge>
								</td>
								<td className="py-2 px-3">
									<Button
										size="sm"
										variant="outline"
									>
										<Link
											href={`/dashboard/ride/${ride.id}`}
										>
											View Details
										</Link>
									</Button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default RideHistoryTable;
