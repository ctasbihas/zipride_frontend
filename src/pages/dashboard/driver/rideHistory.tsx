import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// TODO: Replace with real data from backend
const mockRides = [
	{
		id: "DRV1001",
		date: "2025-08-25",
		rider: "Ayesha Siddiqua",
		from: "Gulshan 2",
		to: "Banani",
		fare: 250,
		status: "Completed",
	},
	{
		id: "DRV1002",
		date: "2025-08-22",
		rider: "Imran Hossain",
		from: "Dhanmondi 27",
		to: "Mirpur 10",
		fare: 320,
		status: "Cancelled",
	},
	{
		id: "DRV1003",
		date: "2025-08-20",
		rider: "Fatema Begum",
		from: "Uttara Sector 7",
		to: "Bashundhara",
		fare: 400,
		status: "Completed",
	},
	{
		id: "DRV1001",
		date: "2025-08-25",
		rider: "Ayesha Siddiqua",
		from: "Gulshan 2",
		to: "Banani",
		fare: 250,
		status: "Completed",
	},
	{
		id: "DRV1002",
		date: "2025-08-22",
		rider: "Imran Hossain",
		from: "Dhanmondi 27",
		to: "Mirpur 10",
		fare: 320,
		status: "Cancelled",
	},
	{
		id: "DRV1003",
		date: "2025-08-20",
		rider: "Fatema Begum",
		from: "Uttara Sector 7",
		to: "Bashundhara",
		fare: 400,
		status: "Completed",
	},
	{
		id: "DRV1001",
		date: "2025-08-25",
		rider: "Ayesha Siddiqua",
		from: "Gulshan 2",
		to: "Banani",
		fare: 250,
		status: "Completed",
	},
	{
		id: "DRV1002",
		date: "2025-08-22",
		rider: "Imran Hossain",
		from: "Dhanmondi 27",
		to: "Mirpur 10",
		fare: 320,
		status: "Cancelled",
	},
	{
		id: "DRV1003",
		date: "2025-08-20",
		rider: "Fatema Begum",
		from: "Uttara Sector 7",
		to: "Bashundhara",
		fare: 400,
		status: "Completed",
	},
	{
		id: "DRV1001",
		date: "2025-08-25",
		rider: "Ayesha Siddiqua",
		from: "Gulshan 2",
		to: "Banani",
		fare: 250,
		status: "Completed",
	},
	{
		id: "DRV1002",
		date: "2025-08-22",
		rider: "Imran Hossain",
		from: "Dhanmondi 27",
		to: "Mirpur 10",
		fare: 320,
		status: "Cancelled",
	},
	{
		id: "DRV1003",
		date: "2025-08-20",
		rider: "Fatema Begum",
		from: "Uttara Sector 7",
		to: "Bashundhara",
		fare: 400,
		status: "Completed",
	},
	{
		id: "DRV1001",
		date: "2025-08-25",
		rider: "Ayesha Siddiqua",
		from: "Gulshan 2",
		to: "Banani",
		fare: 250,
		status: "Completed",
	},
	{
		id: "DRV1002",
		date: "2025-08-22",
		rider: "Imran Hossain",
		from: "Dhanmondi 27",
		to: "Mirpur 10",
		fare: 320,
		status: "Cancelled",
	},
	{
		id: "DRV1003",
		date: "2025-08-20",
		rider: "Fatema Begum",
		from: "Uttara Sector 7",
		to: "Bashundhara",
		fare: 400,
		status: "Completed",
	},
];

// TODO: Add pagination
const RideHistory = () => {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [dateFilter, setDateFilter] = useState("");
	const [fareMin, setFareMin] = useState("");
	const [fareMax, setFareMax] = useState("");

	const handleFilterChange = () => {};

	const filteredRides = mockRides.filter((ride) => {
		const matchesSearch =
			ride.rider.toLowerCase().includes(search.toLowerCase()) ||
			ride.from.toLowerCase().includes(search.toLowerCase()) ||
			ride.to.toLowerCase().includes(search.toLowerCase());
		const matchesStatus = statusFilter
			? ride.status === statusFilter
			: true;
		const matchesDate = dateFilter ? ride.date === dateFilter : true;
		const matchesFareMin =
			fareMin !== "" ? ride.fare >= Number(fareMin) : true;
		const matchesFareMax =
			fareMax !== "" ? ride.fare <= Number(fareMax) : true;
		return (
			matchesSearch &&
			matchesStatus &&
			matchesDate &&
			matchesFareMin &&
			matchesFareMax
		);
	});

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-4xl">
				<CardHeader>
					<CardTitle>Ride History</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col md:flex-row gap-4 mb-6">
						<Input
							placeholder="Search by rider or location..."
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
								handleFilterChange();
							}}
							className="md:w-1/2"
						/>
						<div className="flex gap-2 items-center">
							<Button
								variant={
									statusFilter === "" ? "default" : "outline"
								}
								onClick={() => {
									setStatusFilter("");
									handleFilterChange();
								}}
							>
								All
							</Button>
							<Button
								variant={
									statusFilter === "Completed"
										? "default"
										: "outline"
								}
								onClick={() => {
									setStatusFilter("Completed");
									handleFilterChange();
								}}
							>
								Completed
							</Button>
							<Button
								variant={
									statusFilter === "Cancelled"
										? "default"
										: "outline"
								}
								onClick={() => {
									setStatusFilter("Cancelled");
									handleFilterChange();
								}}
							>
								Cancelled
							</Button>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-4 mb-6">
						<Input
							type="date"
							value={dateFilter}
							onChange={(e) => {
								setDateFilter(e.target.value);
								handleFilterChange();
							}}
							className="md:w-1/4"
							placeholder="Filter by date"
						/>
						<Input
							type="number"
							min={0}
							value={fareMin}
							onChange={(e) => {
								setFareMin(e.target.value);
								handleFilterChange();
							}}
							className="md:w-1/4"
							placeholder="Min Fare"
						/>
						<Input
							type="number"
							min={0}
							value={fareMax}
							onChange={(e) => {
								setFareMax(e.target.value);
								handleFilterChange();
							}}
							className="md:w-1/4"
							placeholder="Max Fare"
						/>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead>
								<tr className="border-b">
									<th className="py-2 px-3 text-left">
										Date
									</th>
									<th className="py-2 px-3 text-left">
										Rider
									</th>
									<th className="py-2 px-3 text-left">
										From
									</th>
									<th className="py-2 px-3 text-left">To</th>
									<th className="py-2 px-3 text-left">
										Fare (৳)
									</th>
									<th className="py-2 px-3 text-left">
										Status
									</th>
									<th className="py-2 px-3 text-left">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{filteredRides.length === 0 ? (
									<tr>
										<td
											colSpan={7}
											className="text-center py-6 text-muted-foreground"
										>
											No rides found.
										</td>
									</tr>
								) : (
									filteredRides.map((ride) => (
										<tr
											key={
												ride.id + ride.date + ride.rider
											}
											className="border-b hover:bg-muted/30"
										>
											<td className="py-2 px-3">
												{ride.date}
											</td>
											<td className="py-2 px-3">
												{ride.rider}
											</td>
											<td className="py-2 px-3">
												{ride.from}
											</td>
											<td className="py-2 px-3">
												{ride.to}
											</td>
											<td className="py-2 px-3">
												{ride.fare}
											</td>
											<td className="py-2 px-3">
												<Badge
													variant={
														ride.status ===
														"Completed"
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
													View Details
												</Button>
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default RideHistory;
