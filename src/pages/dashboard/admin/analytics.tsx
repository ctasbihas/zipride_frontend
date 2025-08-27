import {
	ArcElement,
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);

const rideVolumeData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
	datasets: [
		{
			label: "Rides",
			data: [120, 150, 180, 200, 170, 210, 250, 230],
			backgroundColor: "rgba(54, 162, 235, 0.5)",
			borderColor: "rgba(54, 162, 235, 1)",
			borderWidth: 2,
			fill: true,
		},
	],
};

const revenueTrendData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
	datasets: [
		{
			label: "Revenue ($)",
			data: [2000, 2500, 3000, 3200, 3100, 3500, 4000, 3900],
			backgroundColor: "rgba(255, 206, 86, 0.5)",
			borderColor: "rgba(255, 206, 86, 1)",
			borderWidth: 2,
			fill: true,
		},
	],
};

const driverActivityData = {
	labels: ["Active", "Inactive", "On Ride"],
	datasets: [
		{
			label: "Drivers",
			data: [40, 10, 20],
			backgroundColor: [
				"rgba(75, 192, 192, 0.7)",
				"rgba(255, 99, 132, 0.7)",
				"rgba(153, 102, 255, 0.7)",
			],
			borderWidth: 1,
		},
	],
};

const Analytics = () => {
	return (
		<div className="p-6 space-y-8">
			<h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-white rounded-lg shadow p-4">
					<h2 className="text-xl font-semibold mb-2">Ride Volume</h2>
					<Bar
						data={rideVolumeData}
						options={{
							responsive: true,
							plugins: { legend: { display: false } },
						}}
					/>
				</div>
				<div className="bg-white rounded-lg shadow p-4">
					<h2 className="text-xl font-semibold mb-2">
						Revenue Trends
					</h2>
					<Line
						data={revenueTrendData}
						options={{ responsive: true }}
					/>
				</div>
				<div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-2 flex flex-col items-center">
					<h2 className="text-xl font-semibold mb-2">
						Driver Activity
					</h2>
					<div className="w-64 h-64">
						<Doughnut
							data={driverActivityData}
							options={{
								responsive: true,
								plugins: { legend: { position: "bottom" } },
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
