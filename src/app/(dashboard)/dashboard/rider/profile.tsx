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
import {
	useUpdateProfileMutation,
	useUserQuery,
} from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const profileSchema = z.object({
	name: z.string().min(2, "Name is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const RiderProfile = () => {
	const { data, refetch } = useUserQuery(undefined);
	const [update] = useUpdateProfileMutation();
	const user = data?.data;
	const profileForm = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: user?.name,
		},
	});

	const onProfileSubmit = async (data: ProfileFormValues) => {
		const payload = {
			id: user?._id,
			...data,
		};

		try {
			const result = await update(payload).unwrap();
			refetch();
			toast.success(result.message, {
				position: "top-center",
				richColors: true,
			});
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			toast.error("Failed to update profile", {
				position: "top-center",
				richColors: true,
			});
		}
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-lg">
				<CardHeader>
					<CardTitle>Profile Management</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<div className="mb-6">
						<h2 className="text-lg font-semibold mb-2">
							Account Info
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
								<span className="font-medium">Blocked:</span>{" "}
								{user.isBlocked ? "Yes" : "No"}
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-lg font-semibold mb-2">
							Edit Profile
						</h2>
						<Form {...profileForm}>
							<form
								onSubmit={profileForm.handleSubmit(
									onProfileSubmit
								)}
								className="space-y-4"
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
								<Button
									type="submit"
									className="w-full"
								>
									Save Changes
								</Button>
							</form>
						</Form>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default RiderProfile;
