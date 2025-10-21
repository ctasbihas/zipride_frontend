import RegisterForm from "@/components/modules/auth/RegisterForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Register = async ({
	searchParams,
}: {
	searchParams: Promise<{ role: string }>;
}) => {
	const { role } = await searchParams;
	return (
		<Card className="hover:shadow-lg transition-shadow duration-300">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Create an Account</CardTitle>
				<CardDescription>
					Fill in the details below to create your account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<RegisterForm role={role} />
				<div className="mt-6 text-center">
					<p className="text-sm text-muted-foreground">
						Already have an account?{" "}
						<Link
							href="/login"
							className="text-primary hover:underline font-medium"
						>
							Log In
						</Link>
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default Register;
