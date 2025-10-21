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
import { Home, ShieldAlert } from "lucide-react";
import Link from "next/link";

const Block = async ({
	searchParams,
}: {
	searchParams: Promise<{ email: string }>;
}) => {
	const { email } = await searchParams;

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
						{/* <MailLink email={email as string} /> */}
					</Button>

					<Button
						variant="secondary"
						asChild
						className="w-full justify-center gap-2"
					>
						<Link
							href="/"
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
