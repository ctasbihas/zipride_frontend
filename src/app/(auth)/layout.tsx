import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<Link
					href="/"
					className="mb-8 block"
				>
					<Image
						src="/ZipRide.png"
						alt="ZipRide"
						width={100}
						height={100}
						className="mx-auto"
					/>
				</Link>

				{children}
			</div>
		</div>
	);
}
