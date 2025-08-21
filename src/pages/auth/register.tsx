import RegisterForm from "@/components/modules/auth/RegisterForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
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

				<Card className="hover:shadow-lg transition-shadow duration-300">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">
							Create an Account
						</CardTitle>
						<CardDescription>
							Fill in the details below to create your account.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<RegisterForm />
						<div className="mt-6 text-center">
							<p className="text-sm text-muted-foreground">
								Already have an account?{" "}
								<Link
									to="/login"
									viewTransition
									className="text-primary hover:underline font-medium"
								>
									Log In
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Register;
