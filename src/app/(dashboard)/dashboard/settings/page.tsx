"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
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
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isNewVisible, setIsNewVisible] = useState<boolean>(false);
	const [changePass] = useChangePasswordMutation();
	const form = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	const onPasswordSubmit = async (data: PasswordFormValues) => {
		try {
			const result = await changePass(data).unwrap();

			toast.error(result.message, {
				position: "top-center",
			});

			form.reset();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error.data.message || "Failed to change password", {
				position: "top-center",
			});
		}
	};
	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

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
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onPasswordSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Old Password</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													className="pe-9"
													placeholder="Password"
													{...field}
													type={
														isVisible
															? "text"
															: "password"
													}
												/>
												<Button
													className="absolute inset-y-0 end-0"
													variant="link"
													type="button"
													onClick={toggleVisibility}
													aria-label={
														isVisible
															? "Hide password"
															: "Show password"
													}
													aria-pressed={isVisible}
													aria-controls="password"
												>
													{isVisible ? (
														<EyeOffIcon
															size={16}
															aria-hidden="true"
														/>
													) : (
														<EyeIcon
															size={16}
															aria-hidden="true"
														/>
													)}
												</Button>
											</div>
										</FormControl>
										<FormDescription className="sr-only">
											This is your old password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="newPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													className="pe-9"
													placeholder="New Password"
													{...field}
													type={
														isNewVisible
															? "text"
															: "password"
													}
												/>
												<Button
													className="absolute inset-y-0 end-0"
													variant="link"
													type="button"
													onClick={() =>
														setIsNewVisible(
															(prev) => !prev
														)
													}
													aria-label={
														isNewVisible
															? "Hide password"
															: "Show password"
													}
													aria-pressed={isNewVisible}
													aria-controls="new-password"
												>
													{isNewVisible ? (
														<EyeOffIcon
															size={16}
															aria-hidden="true"
														/>
													) : (
														<EyeIcon
															size={16}
															aria-hidden="true"
														/>
													)}
												</Button>
											</div>
										</FormControl>
										<FormDescription className="sr-only">
											This is your new password.
										</FormDescription>
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
