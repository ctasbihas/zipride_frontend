import LoginForm from "@/components/modules/auth/LoginForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Login = () => {
	return (
		<Card className="hover:shadow-lg transition-shadow duration-300">
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
							href="/register"
							className="text-primary hover:underline font-medium"
						>
							Register
						</Link>
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default Login;
