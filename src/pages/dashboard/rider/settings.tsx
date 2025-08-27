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

const passwordSchema = z.object({
	oldPassword: z
		.string({
			message: "Old password is required and must be a string",
		})
		.min(1, "Old password is required"),
	newPassword: z
		.string({
			message: "Password is required and must be a string",
		})
		.min(8, "Password must be at least 2 characters long")
		.max(100, "Password cannot exceed 100 characters")
		.regex(/(?=.*[a-z])/, {
			message: "Password must contain at least one lowercase letter",
		})
		.regex(/(?=.*[A-Z])/, {
			message: "Password must contain at least one uppercase letter",
		})
		.regex(/(?=.*[!@#$%^&*()])/, {
			message:
				"Password must contain at least one special character (!@#$%^&*())",
		})
		.regex(/(?=.*\d)/, {
			message: "Password must contain at least one number",
		}),
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

const Settings = () => {
	const passwordForm = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	const onPasswordSubmit = (data: PasswordFormValues) => {
		// TODO: Integrate with backend
		console.log(data);
		toast.success("Password changed!", {
			position: "top-center",
			richColors: true,
		});
		passwordForm.reset();
	};

	return (
		<main className="py-8 px-4 flex justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Settings</CardTitle>
				</CardHeader>
				<CardContent>
					<h2 className="text-lg font-semibold mb-4">
						Change Password
					</h2>
					<Form {...passwordForm}>
						<form
							onSubmit={passwordForm.handleSubmit(
								onPasswordSubmit
							)}
							className="space-y-4"
						>
							<FormField
								control={passwordForm.control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Old Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={passwordForm.control}
								name="newPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<Input
												type="password"
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
								Change Password
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</main>
	);
};

export default Settings;
