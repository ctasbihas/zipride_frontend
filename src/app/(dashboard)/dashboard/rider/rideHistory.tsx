/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo, useState } from "react";

import RideHistoryFilters from "@/components/modules/dashboard/rider/RideHistoryFilters";
import RideHistoryPagination from "@/components/modules/dashboard/rider/RideHistoryPagination";
import RideHistoryTable from "@/components/modules/dashboard/rider/RideHistoryTable";
import { useMyRidesQuery } from "@/redux/features/ride/ride.api";

const PAGE_SIZE = 5;

const RiderRideHistory = () => {
	const { data } = useMyRidesQuery(undefined);

	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [dateFilter, setDateFilter] = useState("");
	const [fareMin, setFareMin] = useState("");
	const [fareMax, setFareMax] = useState("");
	const [page, setPage] = useState(1);

	const handleFilterChange = () => {
		setPage(1);
	};

	// Map backend data to UI format
	const rides = useMemo(() => {
		if (!data?.data) return [];
		return data.data.map((ride: any) => ({
			id: ride._id,
			date: ride.createdAt.slice(0, 10),
			from: ride.from,
			to: ride.to,
			fare: ride.fare,
			status:
				ride.rideStatus.charAt(0).toUpperCase() +
				ride.rideStatus.slice(1),
		}));
	}, [data]);

	const filteredRides = rides.filter((ride: any) => {
		const matchesSearch =
			ride.from.toLowerCase().includes(search.toLowerCase()) ||
			ride.to.toLowerCase().includes(search.toLowerCase());
		const matchesStatus = statusFilter
			? ride.status.toLowerCase() === statusFilter.toLowerCase()
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
