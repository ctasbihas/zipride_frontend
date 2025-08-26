import { Card, CardContent } from "@/components/ui/card";
import { Car, ShieldCheck, User } from "lucide-react";

const capabilities = [
	{
		title: "Rider",
		icon: <User className="h-8 w-8 text-primary mb-4" />,
		features: [
			"Instant ride booking",
			"Real-time driver tracking",
			"Secure in-app payments(Coming Soon)",
			"Trip history & receipts",
			"24/7 customer support",
		],
	},
	{
		title: "Driver",
		icon: <Car className="h-8 w-8 text-primary mb-4" />,
		features: [
			"Easy trip management",
			"Earnings dashboard",
			"In-app navigation",
			"Driver ratings & feedback(Coming Soon)",
			"Support & resources",
		],
	},
	{
		title: "Admin",
		icon: <ShieldCheck className="h-8 w-8 text-primary mb-4" />,
		features: [
			"User & driver management",
			"Analytics & reporting",
			"Dispute resolution",
			"System monitoring",
			"City/zone management",
			"Role-based access",
		],
	},
];

const Capabilities = () => {
	return (
		<section className="py-16 bg-secondary/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
					Detailed Capabilities
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{capabilities.map((role) => (
						<Card
							key={role.title}
							className="h-full shadow-sm hover:shadow-lg transition-shadow"
						>
							<CardContent className="p-8 flex flex-col items-center text-center">
								{role.icon}
								<h3 className="text-xl font-semibold mb-4 text-foreground">
									{role.title}
								</h3>
								{/* TODO: Fix list disc */}
								<ul className="text-muted-foreground space-y-2 text-base list-inside list-disc">
									{role.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-start gap-3"
										>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Capabilities;
