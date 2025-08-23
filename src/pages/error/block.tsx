import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Home, Mail, ShieldAlert } from "lucide-react";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const Block = () => {
	const location = useLocation();
	const email = location.state.email;

	const mailtoHref = React.useMemo(() => {
		const subject = encodeURIComponent("Unblock request");

		const body = encodeURIComponent(
			[
				"Hello ZipRide Support Team,",
				"",
				"I hope you're well. I'd like to apologize for any actions that may have led to my account being blocked.",
				"I value the ZipRide community and will make sure to follow the guidelines moving forward.",
				"If possible, please let me know how I can resolve this and have my access restored.",
				"",
				`Email: ${email}`,
				"",
				"Thank you for your understanding and help.",
			].join("\n")
		);
		return `mailto:ctasbihas+zipride@gmail.com?subject=${subject}&body=${body}`;
	}, [email]);

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-background via-muted to-background text-foreground flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
			<Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl border-border/60 bg-card/70 backdrop-blur-md shadow-2xl">
				<CardHeader className="text-center space-y-2 sm:space-y-3 md:space-y-4">
					<div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-2xl bg-destructive/10 ring-1 ring-inset ring-destructive/30 grid place-items-center">
						<ShieldAlert className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-destructive" />
					</div>
					<CardTitle className="text-2xl sm:text-3xl md:text-4xl">
						Account blocked
					</CardTitle>
					<CardDescription className="text-sm sm:text-base text-muted-foreground">
						Admin blocked this account. Maybe there's no reason. So,
						Contact support to get unblocked.
					</CardDescription>
					<div className="flex items-center justify-center gap-2 pt-1">
						<Badge
							variant="destructive"
							className="uppercase tracking-wide"
						>
							Blocked
						</Badge>
					</div>
				</CardHeader>

				<Separator className="bg-border" />

				<CardContent>
					<div className="flex justify-center">
						<div className="rounded-lg border border-border bg-muted/60 p-3 sm:p-4 md:p-5 text-center max-w-full">
							<h5 className="text-xs uppercase text-muted-foreground">
								Account Email
							</h5>
							<h4 className="mt-1.5 text-sm sm:text-base md:text-lg text-foreground break-words max-w-[85vw] sm:max-w-full">
								{email}
							</h4>
						</div>
					</div>
				</CardContent>

				<CardFooter className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
					<Button
						asChild
						className="w-full justify-center gap-2"
					>
						<a
							href={mailtoHref}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Contact support"
						>
							<Mail className="h-4 w-4" />
							Contact support
						</a>
					</Button>

					<Button
						variant="secondary"
						asChild
						className="w-full justify-center gap-2"
					>
						<Link
							to="/"
							aria-label="Return home"
						>
							<Home className="h-4 w-4" />
							Return home
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Block;
