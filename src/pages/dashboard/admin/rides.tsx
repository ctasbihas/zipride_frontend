/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRidesQuery } from "@/redux/features/ride/ride.api";
import React from "react";

const statusColor: Record<string, string> = {
	Completed: "bg-green-100 text-green-700",
	Pending: "bg-yellow-100 text-yellow-700",
	Cancelled: "bg-red-100 text-red-700",
};

const Rides: React.FC = () => {
	const { data: ridesRaw } = useRidesQuery(undefined);
	const rides = ridesRaw?.data ?? [];
	console.log(rides);
	return (
		<div className="max-h-screen py-10 px-2 md:px-8">
			<div className="max-w-5xl mx-auto space-y-8">
				<Card className="shadow-lg border-0">
					<CardHeader>
						<CardTitle className="text-2xl font-bold tracking-tight">
							Ride Oversight
						</CardTitle>
					</CardHeader>
					<CardContent>{/* Filtering form removed */}</CardContent>
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
									{rides.length === 0 ? (
										<tr>
											<td
												colSpan={7}
												className="text-center py-8 text-gray-400"
											>
												No rides found.
											</td>
										</tr>
									) : (
										rides.map((ride: any) => (
											<tr
												key={ride._id}
												className="hover:bg-muted/50 transition"
											>
												<td className="px-4 py-3 font-mono">
													{ride._id}
												</td>
												<td className="px-4 py-3">
													{ride.createdAt}
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
														{ride.rideStatus}
													</Badge>
												</td>
												<td className="px-4 py-3">
													{ride.driver.name}
												</td>
												<td className="px-4 py-3">
													{ride.rider.name}
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
