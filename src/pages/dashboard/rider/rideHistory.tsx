import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

import RideHistoryFilters from "@/components/modules/dashboard/rider/RideHistoryFilters";
import RideHistoryPagination from "@/components/modules/dashboard/rider/RideHistoryPagination";
import RideHistoryTable from "@/components/modules/dashboard/rider/RideHistoryTable";

// TODO: Replace with real data from backend
const mockRides = [
	{
		id: "RIDE1234",
		date: "2025-08-25",
		from: "Banani",
		to: "Dhanmondi",
		fare: 320,
		status: "Completed",
	},
	{
		id: "RIDE1235",
		date: "2025-08-20",
		from: "Gulshan",
		to: "Uttara",
		fare: 450,
		status: "Cancelled",
	},
	{
		id: "RIDE1236",
		date: "2025-08-18",
		from: "Mirpur",
		to: "Bashundhara",
		fare: 390,
		status: "Completed",
	},
];

const PAGE_SIZE = 5;

const RiderRideHistory = () => {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [dateFilter, setDateFilter] = useState("");
	const [fareMin, setFareMin] = useState("");
	const [fareMax, setFareMax] = useState("");
	const [page, setPage] = useState(1);

	const handleFilterChange = () => {
		setPage(1);
	};

	const filteredRides = mockRides.filter((ride) => {
		const matchesSearch =
			ride.from.toLowerCase().includes(search.toLowerCase()) ||
			ride.to.toLowerCase().includes(search.toLowerCase());
		const matchesStatus = statusFilter
			? ride.status === statusFilter
			: true;
		const matchesDate = dateFilter ? ride.date === dateFilter : true;
		const matchesFareMin = fareMin ? ride.fare >= Number(fareMin) : true;
		const matchesFareMax = fareMax ? ride.fare <= Number(fareMax) : true;
		return (
			matchesSearch &&
			matchesStatus &&
			matchesDate &&
			matchesFareMin &&
			matchesFareMax
		);
	});

	const totalPages = Math.ceil(filteredRides.length / PAGE_SIZE);
	const paginatedRides = filteredRides.slice(
		(page - 1) * PAGE_SIZE,
		page * PAGE_SIZE
	);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-4xl">
				<CardHeader>
					<CardTitle>Ride History</CardTitle>
				</CardHeader>
				<CardContent>
					<RideHistoryFilters
						search={search}
						setSearch={setSearch}
						statusFilter={statusFilter}
						setStatusFilter={setStatusFilter}
						dateFilter={dateFilter}
						setDateFilter={setDateFilter}
						fareMin={fareMin}
						setFareMin={setFareMin}
						fareMax={fareMax}
						setFareMax={setFareMax}
						onFilterChange={handleFilterChange}
					/>
					<RideHistoryTable rides={paginatedRides} />
					<RideHistoryPagination
						page={page}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</CardContent>
			</Card>
		</main>
	);
};

export default RiderRideHistory;
