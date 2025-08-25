import { Car, Clock, MapPin, Users } from "lucide-react";

const Stats = () => {
	const statsData = [
		{
			icon: <Users className="h-6 w-6 text-primary" />,
			label: "Happy Riders",
			value: 150,
			suffix: "+",
		},
		{
			icon: <Car className="h-6 w-6 text-primary" />,
			label: "Active Drivers",
			value: 12,
			suffix: "+",
		},
		{
			icon: <MapPin className="h-6 w-6 text-primary" />,
			label: "Completed Rides",
			value: 25,
			suffix: "+",
		},
		{
			icon: <Clock className="h-6 w-6 text-primary" />,
			label: "Cities Served",
			value: 8,
			suffix: "",
		},
	];

	const formatNumber = (num: number) => {
		if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
		if (num >= 1000) return (num / 1000).toFixed(0) + "K";
		return num.toString();
	};

	return (
		<section className="py-16 bg-gradient-to-b from-muted/70 via-transparent to-muted/70 text-foreground">
			<div className="container mx-auto px-4">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold">
						ZipRide In Numbers
					</h2>
					<p className="mt-2 text-sm md:text-base text-muted-foreground">
						Simple stats that show our growth and reliability.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					{statsData.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-2 rounded-lg border border-border p-5"
						>
							<div className="rounded-full p-2 bg-primary/10">
								{stat.icon}
							</div>
							<div className="text-2xl md:text-3xl font-bold">
								{formatNumber(stat.value)}
								{stat.suffix}
							</div>
							<div className="text-sm text-muted-foreground">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
