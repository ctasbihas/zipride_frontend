import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(1, "Please enter your name."),
	email: z.email("Please enter a valid email address."),
	message: z.string().min(1, "Please enter a message."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormValues) => {
		// TODO: Implement form submission logic
		console.log(data);

		toast.success("Message sent successfully!", {
			duration: 4000,
			position: "top-center",
			richColors: true,
		});

		form.reset();
	};

	return (
		<main className="py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<Card className="max-w-3xl mx-auto">
					<CardContent className="p-8">
						<h1 className="text-2xl sm:text-3xl font-bold mb-4">
							Contact ZipRide
						</h1>
						<p className="text-muted-foreground mb-6">
							Have a question, suggestion, or want to collaborate?
							Send a message and I'll respond within 48 hours.
						</p>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								noValidate
							>
								<div className="grid grid-cols-1 gap-4">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Your name</FormLabel>
												<FormControl>
													<Input
														placeholder="Jane Doe"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														placeholder="you@example.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Message</FormLabel>
												<FormControl>
													<Textarea
														placeholder="How can we help?"
														rows={6}
														className="resize-none"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex items-center gap-4 mt-2">
										<Button type="submit">
											Send Message
										</Button>
									</div>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</main>
	);
};

export default Contact;
