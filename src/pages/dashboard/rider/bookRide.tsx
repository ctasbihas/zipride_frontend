import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const bookRideSchema = z.object({
	from: z.string().min(2, "Pickup location is required"),
	to: z.string().min(2, "Destination is required"),
	passengers: z
		.number()
		.min(1, "At least 1 passenger required")
		.max(6, "Max 6 passengers allowed"),
	fare: z.number().min(10, "Minimum fare is 10"),
});

type BookRideFormValues = z.infer<typeof bookRideSchema>;

const BookRide = () => {
	const form = useForm<BookRideFormValues>({
		resolver: zodResolver(bookRideSchema),
		defaultValues: {
			from: "",
			to: "",
			passengers: 1,
			fare: 100,
		},
	});

	const onSubmit = (data: BookRideFormValues) => {
		// TODO: Integrate with backend API and redirect to waiting page
		console.log(data);

		toast.success("Ride request submitted!", {
			position: "top-center",
			richColors: true,
		});
		form.reset();
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-lg">
				<CardHeader>
					<CardTitle>Book a Ride</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							{/* TODO: Add auto-suggest area name */}
							<FormField
								control={form.control}
								name="from"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Pickup Location</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter pickup location"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* TODO: Add auto-suggest area name */}
							<FormField
								control={form.control}
								name="to"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Destination</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter destination"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="passengers"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Total Passengers</FormLabel>
										<FormControl>
											<Input
												type="number"
												min={1}
												max={6}
												placeholder="1"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="fare"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fare Offer (৳)</FormLabel>
										<FormControl>
											<Input
												type="number"
												min={10}
												placeholder="100"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full"
							>
								Request Ride
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</main>
	);
};

export default BookRide;
