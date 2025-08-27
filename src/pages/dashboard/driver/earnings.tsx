import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Summary data (unchanged)
const earningsSummary = [
	{
		label: "Today's Earnings",
		value: 1200,
		icon: <DollarSign className="h-5 w-5 text-primary" />,
	},
	{
		label: "This Week",
		value: 6500,
		icon: <Calendar className="h-5 w-5 text-primary" />,
	},
	{
		label: "This Month",
		value: 25000,
		icon: <TrendingUp className="h-5 w-5 text-primary" />,
	},
	{
		label: "Total Rides",
		value: 120,
		icon: <Car className="h-5 w-5 text-primary" />,
	},
];

// Mock chart data
const chartData = {
	daily: [
		{ label: "6 AM", earnings: 200 },
		{ label: "9 AM", earnings: 300 },
		{ label: "12 PM", earnings: 250 },
		{ label: "3 PM", earnings: 150 },
		{ label: "6 PM", earnings: 200 },
		{ label: "9 PM", earnings: 100 },
	],
	weekly: [
		{ label: "Mon", earnings: 800 },
		{ label: "Tue", earnings: 1200 },
		{ label: "Wed", earnings: 900 },
		{ label: "Thu", earnings: 1500 },
		{ label: "Fri", earnings: 1100 },
		{ label: "Sat", earnings: 1000 },
		{ label: "Sun", earnings: 1000 },
	],
	monthly: [
		{ label: "Week 1", earnings: 6000 },
		{ label: "Week 2", earnings: 7000 },
		{ label: "Week 3", earnings: 8000 },
		{ label: "Week 4", earnings: 4000 },
	],
};

const tabs: { key: "daily" | "weekly" | "monthly"; label: string }[] = [
	{ key: "daily", label: "Daily" },
	{ key: "weekly", label: "Weekly" },
	{ key: "monthly", label: "Monthly" },
];

const Earnings = () => {
	const [selectedTab, setSelectedTab] = useState<
		"daily" | "weekly" | "monthly"
	>("weekly");

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-3xl">
				<CardHeader>
					<CardTitle>Earnings Dashboard</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
						{earningsSummary.map((item, idx) => (
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
						))}
					</div>

					<div>
						<div className="flex gap-2 mb-4">
							{tabs.map((tab) => (
								<button
									key={tab.key}
									className={`px-4 py-1 rounded ${
										selectedTab === tab.key
											? "bg-primary text-white"
											: "bg-muted text-primary"
									}`}
									onClick={() => setSelectedTab(tab.key)}
								>
									{tab.label}
								</button>
							))}
						</div>
						<h2 className="text-lg font-semibold mb-4">
							Earnings{" "}
							{tabs.find((t) => t.key === selectedTab)?.label}
						</h2>
						<div className="h-56">
							<ResponsiveContainer
								width="100%"
								height="100%"
							>
								<BarChart data={chartData[selectedTab]}>
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
						</div>
						<div className="text-xs text-muted-foreground mt-2">
							* Chart is for illustration. Integrate with real
							data for production.
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Earnings;
