import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<main
			className="min-h-[100dvh] grid place-items-center bg-background px-6 py-12 text-foreground"
			aria-labelledby="not-found-title"
		>
			<div className="w-full max-w-2xl">
				<Card
					className="text-center"
					role="region"
				>
					<CardHeader className="flex flex-col items-center text-center gap-2">
						<div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
							<MapPin
								className="h-8 w-8"
								aria-hidden="true"
							/>
						</div>
						<CardTitle
							id="not-found-title"
							className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
						>
							404
						</CardTitle>
						<CardDescription className="text-lg sm:text-xl font-semibold">
							Page not found
						</CardDescription>
					</CardHeader>

					<CardContent className="text-sm sm:text-base text-muted-foreground text-center">
						The page you’re looking for doesn’t exist. It may have
						been moved or removed.
					</CardContent>

					<CardFooter className="mt-2 flex flex-col sm:flex-row gap-3 justify-center">
						<Button
							asChild
							className="w-full sm:w-auto"
						>
							<Link
								to="/"
								aria-label="Return to home page"
							>
								<ArrowLeft />
								Return Home
							</Link>
						</Button>

						<Button
							variant="outline"
							type="button"
							onClick={() => window.history.back()}
							className="w-full sm:w-auto"
							aria-label="Go back to previous page"
						>
							<ChevronLeft />
							Go Back
						</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
};

export default NotFound;
