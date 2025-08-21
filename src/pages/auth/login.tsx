import LoginForm from "@/components/modules/auth/LoginForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<Link
						to="/"
						className="text-2xl font-bold mb-6"
					>
						ZipRide
					</Link>
				</div>

				<Card className="hover-lift">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Welcome Back</CardTitle>
						<CardDescription>
							Log in to your account to continue
						</CardDescription>
					</CardHeader>
					<CardContent>
						<LoginForm />
						<div className="mt-6 text-center">
							<p className="text-sm text-muted-foreground">
								Don't have an account?{" "}
								<Link
									to="/register"
									viewTransition
									className="text-primary hover:underline font-medium"
								>
									Register
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Login;
