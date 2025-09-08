/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMyRidesQuery } from "@/redux/features/ride/ride.api";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { useMemo, useState } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
dayjs.extend(isoWeek);

const Earnings = () => {
	const [selectedTab, setSelectedTab] = useState<
		"daily" | "weekly" | "monthly"
	>("weekly");
	const {
		data: myRidesData,
		isLoading: ridesLoading,
		error: ridesError,
	} = useMyRidesQuery(undefined);

	const chartData = useMemo(() => {
		const rides = myRidesData?.data || [];
		const daily: Record<string, number> = {};
		const weekly: Record<string, number> = {};
		const monthly: Record<string, number> = {};

		rides.forEach((ride: any) => {
			const date = dayjs(ride.createdAt);
			const dayKey = date.format("YYYY-MM-DD");
			daily[dayKey] = (daily[dayKey] || 0) + ride.fare;
			const weekKey = `${date.year()}-W${date.isoWeek()}`;
			weekly[weekKey] = (weekly[weekKey] || 0) + ride.fare;
			const monthKey = date.format("YYYY-MM");
			monthly[monthKey] = (monthly[monthKey] || 0) + ride.fare;
		});

		const sortByLabel = (a: any, b: any) => a.label.localeCompare(b.label);

		return {
			daily: Object.entries(daily)
				.map(([label, earnings]) => ({ label, earnings }))
				.sort(sortByLabel),
			weekly: Object.entries(weekly)
				.map(([label, earnings]) => ({ label, earnings }))
				.sort(sortByLabel),
			monthly: Object.entries(monthly)
				.map(([label, earnings]) => ({ label, earnings }))
				.sort(sortByLabel),
		};
	}, [myRidesData]);

	const chartTabs = [
		{ key: "daily", label: "Daily" },
		{ key: "weekly", label: "Weekly" },
		{ key: "monthly", label: "Monthly" },
	];
	const chart = chartData[selectedTab] ?? [];

	return (
		<main className="py-6 flex justify-center min-h-screen bg-background dark:bg-[#18181b]">
			<Card className="w-full max-w-3xl shadow-2xl border-0 rounded-2xl bg-card dark:bg-[#23232a]">
				<CardHeader className="pb-2 border-b border-border dark:border-[#2d2d36]">
					<CardTitle className="text-2xl font-bold text-primary dark:text-white">
						Earnings Overview
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8 pt-6">
					{/* Tab Section */}
					<div className="flex justify-center">
						<div className="inline-flex rounded-full bg-muted dark:bg-[#23232a] p-1 shadow-inner">
							{chartTabs.map((tab) => (
								<button
									key={tab.key}
									className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200
										${
											selectedTab === tab.key
												? "bg-primary text-primary-foreground shadow dark:bg-white dark:text-black"
												: "text-primary hover:bg-accent dark:text-white dark:hover:bg-[#23232a]"
										}
									`}
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
					</div>
					{/* Chart Section */}
					<div>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-semibold text-foreground dark:text-white">
								{
									chartTabs.find((t) => t.key === selectedTab)
										?.label
								}{" "}
								Earnings
							</h2>
						</div>
						<div className="h-72 bg-gradient-to-br from-muted to-background dark:from-[#23232a] dark:to-[#18181b] rounded-xl shadow-inner p-4 flex items-center">
							{ridesLoading ? (
								<div className="flex items-center justify-center w-full h-full font-medium text-primary dark:text-white">
									Loading chart...
								</div>
							) : ridesError ? (
								<div className="flex items-center justify-center w-full h-full font-medium text-destructive dark:text-red-400">
									Failed to load chart.
								</div>
							) : (
								<ResponsiveContainer
									width="100%"
									height="100%"
									className={"select-none"}
								>
									<BarChart
										data={chart}
										className="text-white"
									>
										<CartesianGrid
											strokeDasharray="3 3"
											stroke="var(--border)"
										/>
										<XAxis
											dataKey="label"
											tick={{
												fontSize: 13,
												fill: "var(--tw-prose-muted, #a1a1aa)",
											}}
											axisLine={false}
											tickLine={false}
										/>
										<YAxis
											tick={{
												fontSize: 13,
												fill: "var(--tw-prose-muted, #a1a1aa)",
											}}
											axisLine={false}
											tickLine={false}
											width={60}
											tickFormatter={(v) => `৳${v}`}
										/>
										<Tooltip
											formatter={(value: number) => [
												`৳${value}`,
												"Earnings",
											]}
											contentStyle={{
												background: "var(--card, #fff)",
												border: "1px solid var(--border, #e5e7eb)",
												borderRadius: 8,
												boxShadow:
													"0 2px 8px rgba(0,0,0,0.05)",
												fontSize: 14,
												color: "var(--foreground, #18181b)",
											}}
										/>
										<Legend
											verticalAlign="top"
											height={36}
											iconType="circle"
											wrapperStyle={{
												fontSize: 14,
												color: "var(--chart, #6366f1)",
											}}
										/>
										<Bar
											dataKey="earnings"
											fill="var(--chart-bar, #6366f1)"
											radius={[8, 8, 0, 0]}
											barSize={32}
											name="Earnings"
											label={{
												position: "top",
												fill: "var(--primary, #6366f1)",
												fontSize: 12,
												formatter: (v: any) =>
													v > 0 ? `৳${v}` : "",
											}}
										/>
									</BarChart>
								</ResponsiveContainer>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Earnings;
