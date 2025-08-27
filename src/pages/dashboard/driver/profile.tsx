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
import { useUserQuery } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const profileSchema = z.object({
	name: z.string().min(2, "Name is required"),
	vehicleLicense: z.string().min(2, "Vehicle license is required"),
	vehicleCapacity: z.string().min(2, "Vehicle capacity is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const DriverProfile = () => {
	const { data } = useUserQuery(undefined);
	const user = data?.data || {};
	// TODO: Get the data from backend
	const vehicle = user.vehicle || {
		license: "ABC-1234",
		capacity: "4",
	};

	const profileForm = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: user?.name || "",
			vehicleLicense: vehicle.license || "",
			vehicleCapacity: vehicle.capacity || "",
		},
	});

	const onProfileSubmit = (data: ProfileFormValues) => {
		// TODO: Integrate with backend
		console.log(data);
		toast.success("Profile updated!", {
			position: "top-center",
			richColors: true,
		});
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-2xl">
				<CardHeader>
					<CardTitle>Driver Profile Management</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					{/* Account Info */}
					<div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h2 className="text-lg font-semibold mb-2">
								Contact Info
							</h2>
							<div className="space-y-2 text-sm">
								<div>
									<span className="font-medium">Name:</span>{" "}
									{user.name}
								</div>
								<div>
									<span className="font-medium">Email:</span>{" "}
									{user.email}
								</div>
								<div>
									<span className="font-medium">Role:</span>{" "}
									{user.role}
								</div>
								<div>
									<span className="font-medium">
										Blocked:
									</span>{" "}
									{user.isBlocked ? "Yes" : "No"}
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-lg font-semibold mb-2">
								Vehicle Details
							</h2>
							<div className="space-y-2 text-sm">
								<div>
									<span className="font-medium">
										License:
									</span>{" "}
									{vehicle.license}
								</div>
								<div>
									<span className="font-medium">
										Capacity:
									</span>{" "}
									{vehicle.capacity}
								</div>
							</div>
						</div>
					</div>
					{/* Edit Profile */}
					<div>
						<h2 className="text-lg font-semibold mb-2">
							Edit Profile
						</h2>
						<Form {...profileForm}>
							<form
								onSubmit={profileForm.handleSubmit(
									onProfileSubmit
								)}
								className="grid grid-cols-1 md:grid-cols-2 gap-6"
							>
								<FormField
									control={profileForm.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={profileForm.control}
									name="vehicleLicense"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Vehicle License
											</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={profileForm.control}
									name="vehicleCapacity"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Vehicle Capacity
											</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="md:col-span-2">
									<Button
										type="submit"
										className="w-full"
									>
										Save Changes
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default DriverProfile;
