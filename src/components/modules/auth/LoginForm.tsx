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
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
	email: z.email("Invalid email format").toLowerCase(),
	password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [login] = useLoginMutation();
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		setIsLoading(true);
		try {
			const result = await login(data).unwrap();

			toast.success(result.message, {
				richColors: true,
				position: "top-center",
			});

			navigate("/dashboard");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			const status = error.data.statusCode;
			if (status === 401) {
				const message = "Invalid credentials";
				form.setError("email", { type: "server", message });
				form.setError("password", { type: "server", message });
			} else if (status === 403) {
				toast.error(error.data.message, {
					position: "top-center",
					richColors: true,
				});
				navigate("/block", { state: { email: data.email } });
			} else {
				toast.error("Login failed", {
					position: "top-center",
					richColors: true,
				});
			}
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
							<div className="flex items-center justify-between">
								<FormLabel>Password</FormLabel>
								<Link
									to="/forgot-password"
									className="text-sm text-muted-foreground hover:underline"
								>
									Forgot Password?
								</Link>
							</div>
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

export default LoginForm;
