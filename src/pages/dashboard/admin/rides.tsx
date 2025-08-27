import React, { useEffect, useState } from "react";

// Mock data for demonstration
const mockRides = [
	{
		id: "RIDE001",
		date: "2024-06-01",
		status: "Completed",
		driver: "Alice Smith",
		rider: "John Doe",
		from: "Downtown",
		to: "Airport",
	},
	{
		id: "RIDE002",
		date: "2024-06-02",
		status: "Pending",
		driver: "Bob Lee",
		rider: "Jane Roe",
		from: "Mall",
		to: "University",
	},
	{
		id: "RIDE003",
		date: "2024-06-03",
		status: "Cancelled",
		driver: "Alice Smith",
		rider: "Sam Green",
		from: "Station",
		to: "Hotel",
	},
];

const statuses = ["All", "Completed", "Pending", "Cancelled"];
const drivers = ["All", ...Array.from(new Set(mockRides.map((r) => r.driver)))];
const riders = ["All", ...Array.from(new Set(mockRides.map((r) => r.rider)))];

// Import shadcn/ui components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const statusColor: Record<string, string> = {
	Completed: "bg-green-100 text-green-700",
	Pending: "bg-yellow-100 text-yellow-700",
	Cancelled: "bg-red-100 text-red-700",
};

const Rides: React.FC = () => {
	const [filters, setFilters] = useState({
		date: "",
		status: "All",
		driver: "All",
		rider: "All",
	});
	const [filteredRides, setFilteredRides] = useState(mockRides);

	useEffect(() => {
		let rides = mockRides;
		if (filters.date) {
			rides = rides.filter((r) => r.date === filters.date);
		}
		if (filters.status !== "All") {
			rides = rides.filter((r) => r.status === filters.status);
		}
		if (filters.driver !== "All") {
			rides = rides.filter((r) => r.driver === filters.driver);
		}
		if (filters.rider !== "All") {
			rides = rides.filter((r) => r.rider === filters.rider);
		}
		setFilteredRides(rides);
	}, [filters]);

	const handleFilterChange = (name: string, value: string) => {
		setFilters((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleReset = () => {
		setFilters({
			date: "",
			status: "All",
			driver: "All",
			rider: "All",
		});
	};

	return (
		<div className="max-h-screen py-10 px-2 md:px-8">
			<div className="max-w-5xl mx-auto space-y-8">
				<Card className="shadow-lg border-0">
					<CardHeader>
						<CardTitle className="text-2xl font-bold tracking-tight">
							Ride Oversight
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form className="grid grid-cols-1 md:grid-cols-5 gap-4">
							<div className="flex flex-col gap-1">
								<Label htmlFor="date">Date</Label>
								<Input
									id="date"
									type="date"
									name="date"
									value={filters.date}
									onChange={(e) =>
										handleFilterChange(
											"date",
											e.target.value
										)
									}
								/>
							</div>
							<div className="flex flex-col gap-1">
								<Label>Status</Label>
								<Select
									value={filters.status}
									onValueChange={(v) =>
										handleFilterChange("status", v)
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Status" />
									</SelectTrigger>
									<SelectContent>
										{statuses.map((status) => (
											<SelectItem
												key={status}
												value={status}
											>
												{status}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Label>Driver</Label>
								<Select
									value={filters.driver}
									onValueChange={(v) =>
										handleFilterChange("driver", v)
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Driver" />
									</SelectTrigger>
									<SelectContent>
										{drivers.map((driver) => (
											<SelectItem
												key={driver}
												value={driver}
											>
												{driver}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Label>Rider</Label>
								<Select
									value={filters.rider}
									onValueChange={(v) =>
										handleFilterChange("rider", v)
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Rider" />
									</SelectTrigger>
									<SelectContent>
										{riders.map((rider) => (
											<SelectItem
												key={rider}
												value={rider}
											>
												{rider}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-1 mt-6 md:mt-0">
								<Button
									variant="outline"
									type="button"
									onClick={handleReset}
									className="w-full"
								>
									Reset
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>

				<Card className="shadow-lg border-0">
					<CardHeader>
						<CardTitle className="text-lg font-semibold">
							Rides List
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0">
						<ScrollArea className="w-full">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-muted">
									<tr>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											Ride ID
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											Date
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											Status
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											Driver
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											Rider
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											From
										</th>
										<th className="px-4 py-3 text-left font-semibold text-muted-foreground">
											To
										</th>
									</tr>
								</thead>
								<tbody>
									{filteredRides.length === 0 ? (
										<tr>
											<td
												colSpan={7}
												className="text-center py-8 text-gray-400"
											>
												No rides found.
											</td>
										</tr>
									) : (
										filteredRides.map((ride) => (
											<tr
												key={ride.id}
												className="hover:bg-muted/50 transition"
											>
												<td className="px-4 py-3 font-mono">
													{ride.id}
												</td>
												<td className="px-4 py-3">
													{ride.date}
												</td>
												<td className="px-4 py-3">
													<Badge
														className={
															"rounded px-2 py-1 font-medium " +
															(statusColor[
																ride.status
															] ||
																"bg-gray-100 text-gray-700")
														}
													>
														{ride.status}
													</Badge>
												</td>
												<td className="px-4 py-3">
													{ride.driver}
												</td>
												<td className="px-4 py-3">
													{ride.rider}
												</td>
												<td className="px-4 py-3">
													{ride.from}
												</td>
												<td className="px-4 py-3">
													{ride.to}
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</ScrollArea>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Rides;
