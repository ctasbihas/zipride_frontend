import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
	EyeIcon,
	EyeOffIcon,
	Loader2Icon,
	UserCheck,
	Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z
	.object({
		name: z
			.string({
				message: "Name is required and must be a string",
			})
			.min(2, "Name must be at least 2 characters long")
			.max(50, "Name cannot exceed 50 characters")
			.trim(),
		email: z.email("Invalid email format").toLowerCase(),
		password: z
			.string({
				message: "Password is required and must be a string",
			})
			.min(8, "Password must be at least 8 characters long")
			.max(100, "Password cannot exceed 100 characters")
			.regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
			.regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
			.regex(/[0-9]/, "Password must contain at least 1 number")
			.regex(
				/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
				"Password must contain at least 1 special character"
			),
		confirmPassword: z.string(),
		role: z.enum(["driver", "rider"], {
			message: "Role must be one of the predefined user roles",
		}),
	})
	.refine((v) => v.password === v.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			role: "rider",
		},
	});
	const onSubmit = (data: z.infer<typeof registerSchema>) => {
		setIsLoading(true);

		try {
			// TODO: Implement registration logic
			throw new Error(
				"Registration functionality is not implemented yet."
			);
			console.log("Form submitted:", data);
			toast.success("Registration successful!", {
				richColors: true,
			});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.error("Registration failed:", error);
			toast.error(error.message, {
				richColors: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your name"
									{...field}
								/>
							</FormControl>
							<FormDescription className="sr-only">
								This is your name.
							</FormDescription>
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
									placeholder="Enter your email"
									{...field}
								/>
							</FormControl>
							<FormDescription className="sr-only">
								This is your email address.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										className="pe-9"
										placeholder="Password"
										{...field}
										type={isVisible ? "text" : "password"}
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
								This is your password.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										className="pe-9"
										placeholder="Confirm Password"
										{...field}
										type={
											isConfirmVisible
												? "text"
												: "password"
										}
									/>
									<Button
										className="absolute inset-y-0 end-0"
										variant="link"
										type="button"
										onClick={() =>
											setIsConfirmVisible((prev) => !prev)
										}
										aria-label={
											isConfirmVisible
												? "Hide password"
												: "Show password"
										}
										aria-pressed={isConfirmVisible}
										aria-controls="confirm-password"
									>
										{isConfirmVisible ? (
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
								This is your confirm password.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="role"
					render={({ field }) => (
						<FormItem>
							<FormLabel>I want to</FormLabel>
							<FormControl>
								<div className="grid grid-cols-2 gap-3">
									<Button
										type="button"
										variant={
											field.value === "rider"
												? "default"
												: "outline"
										}
										onClick={() => field.onChange("rider")}
										className="h-20 flex-col"
										aria-pressed={field.value === "rider"}
									>
										<Users className="h-6 w-6 mb-2" />
										Book Rides
									</Button>
									<Button
										type="button"
										variant={
											field.value === "driver"
												? "default"
												: "outline"
										}
										onClick={() => field.onChange("driver")}
										className="h-20 flex-col"
										aria-pressed={field.value === "driver"}
									>
										<UserCheck className="h-6 w-6 mb-2" />
										Drive & Earn
									</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full"
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							<Loader2Icon className="animate-spin" />
							Please wait
						</>
					) : (
						"Login"
					)}
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
