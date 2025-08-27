import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	useEarningsChartQuery,
	useEarningsSummaryQuery,
} from "@/redux/features/driver/driver.api";
import { Calendar, Car, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const Earnings = () => {
	const [selectedTab, setSelectedTab] = useState<
		"daily" | "weekly" | "monthly"
	>("weekly");
	const {
		data: summaryData,
		isLoading: summaryLoading,
		error: summaryError,
	} = useEarningsSummaryQuery(undefined);
	const {
		data: chartData,
		isLoading: chartLoading,
		error: chartError,
	} = useEarningsChartQuery(undefined);

	// Prepare summary cards
	const summary = summaryData?.data;
	const summaryCards = [
		{
			label: "Today's Earnings",
			value: summary?.todayEarnings ?? 0,
			icon: <DollarSign className="h-5 w-5 text-primary" />,
		},
		{
			label: "This Week",
			value: summary?.weekEarnings ?? 0,
			icon: <Calendar className="h-5 w-5 text-primary" />,
		},
		{
			label: "This Month",
			value: summary?.monthEarnings ?? 0,
			icon: <TrendingUp className="h-5 w-5 text-primary" />,
		},
		{
			label: "Total Rides",
			value: summary?.totalRides ?? 0,
			icon: <Car className="h-5 w-5 text-primary" />,
		},
	];

	// Chart data
	const chartTabs = [
		{ key: "daily", label: "Daily" },
		{ key: "weekly", label: "Weekly" },
		{ key: "monthly", label: "Monthly" },
	];
	const chart = chartData?.data?.[selectedTab] ?? [];

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-3xl">
				<CardHeader>
					<CardTitle>Earnings Dashboard</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					{/* Summary Cards */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
						{summaryLoading ? (
							<div className="col-span-4 text-center">
								Loading summary...
							</div>
						) : summaryError ? (
							<div className="col-span-4 text-center text-red-500">
								Failed to load summary.
							</div>
						) : (
							summaryCards.map((item, idx) => (
								<Card
									key={idx}
									className="shadow-sm"
								>
									<CardContent className="flex items-center gap-3 p-4">
										<div className="rounded-full bg-primary/10 p-2">
											{item.icon}
										</div>
										<div>
											<div className="text-xl font-bold">
												{item.label === "Total Rides"
													? item.value
													: `৳${item.value}`}
											</div>
											<div className="text-muted-foreground text-xs">
												{item.label}
											</div>
										</div>
									</CardContent>
								</Card>
							))
						)}
					</div>

					{/* Chart Section */}
					<div>
						<div className="flex gap-2 mb-4">
							{chartTabs.map((tab) => (
								<button
									key={tab.key}
									className={`px-4 py-1 rounded ${
										selectedTab === tab.key
											? "bg-primary text-white"
											: "bg-muted text-primary"
									}`}
									onClick={() =>
										setSelectedTab(
											tab.key as
												| "daily"
												| "weekly"
												| "monthly"
										)
									}
								>
									{tab.label}
								</button>
							))}
						</div>
						<h2 className="text-lg font-semibold mb-4">
							Earnings{" "}
							{
								chartTabs.find((t) => t.key === selectedTab)
									?.label
							}
						</h2>
						<div className="h-56">
							{chartLoading ? (
								<div className="flex items-center justify-center h-full">
									Loading chart...
								</div>
							) : chartError ? (
								<div className="flex items-center justify-center h-full text-red-500">
									Failed to load chart.
								</div>
							) : (
								<ResponsiveContainer
									width="100%"
									height="100%"
								>
									<BarChart data={chart}>
										<XAxis dataKey="label" />
										<YAxis />
										<Tooltip
											formatter={(value: number) =>
												`৳${value}`
											}
										/>
										<Bar
											dataKey="earnings"
											fill="#2563eb"
											radius={[4, 4, 0, 0]}
										/>
									</BarChart>
								</ResponsiveContainer>
							)}
						</div>
						<div className="text-xs text-muted-foreground mt-2">
							* Chart is for illustration. Data is fetched from
							backend.
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Earnings;
