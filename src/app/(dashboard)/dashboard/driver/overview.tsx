"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useUserQuery } from "@/redux/features/auth/auth.api";
import {
	useEarningsSummaryQuery,
	useToggleActiveMutation,
} from "@/redux/features/driver/driver.api";
import { useMyRidesQuery } from "@/redux/features/ride/ride.api";
import { Car, DollarSign, History, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const getLastRideDate = (rides: any[]) => {
	if (!rides || rides.length === 0) return "-";
	const sorted = [...rides].sort(
		(a, b) =>
			new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	);
	const last = sorted[0];
	const date = new Date(last.createdAt);
	const today = new Date();
	if (date.toDateString() === today.toDateString()) return "Today";
	return date.toLocaleDateString();
};

const DriverOverview = () => {
	const { data: userData, refetch: refetchUser } = useUserQuery(undefined);
	const [activeStatus, setActiveStatus] = useState<string>(
		userData?.data?.driverInfo.activeStatus
	);

	const [toggleActive, { isLoading: isToggling }] = useToggleActiveMutation();
	const { data: summaryData, isLoading: summaryLoading } =
		useEarningsSummaryQuery(undefined);
	const { data: ridesData, isLoading: ridesLoading } =
		useMyRidesQuery(undefined);
	const summary = summaryData?.data;
	const rides = ridesData?.data || [];

	// Update activeStatus when userData changes
	React.useEffect(() => {
		if (userData?.data?.activeStatus) {
			setActiveStatus(userData.data.activeStatus);
		}
	}, [userData]);

	// Switch expects boolean, but backend expects 'online'/'offline'
	const handleToggle = async (checked: boolean) => {
		const newStatus = checked ? "online" : "offline";

		try {
			await toggleActive({
				id: userData?.data?._id,
				activeStatus: newStatus,
			}).unwrap();
			refetchUser();
		} catch (e) {
			console.error(e);
		} finally {
			setActiveStatus(newStatus);
		}
	};

	const stats = [
		{
			label: "Total Rides",
			value: summaryLoading ? "..." : summary?.totalRides,
			icon: <Car className="h-6 w-6 text-primary" />,
		},
		{
			label: "Total Earnings",
			value: summaryLoading ? "..." : `৳${summary?.totalEarnings}`,
			icon: <DollarSign className="h-6 w-6 text-primary" />,
		},
		{
			label: "Last Ride",
			value: ridesLoading ? "..." : getLastRideDate(rides),
			icon: <History className="h-6 w-6 text-primary" />,
		},
	];

	return (
		<main className="py-8 px-4">
			<h1 className="text-2xl font-bold mb-6">Welcome, Driver!</h1>
			<div className="flex items-center gap-4 mb-8">
				<Switch
					checked={activeStatus === "online"}
					onCheckedChange={handleToggle}
					id="online-toggle"
					disabled={isToggling}
				/>
				<label
					htmlFor="online-toggle"
					className="font-medium"
				>
					{activeStatus === "online"
						? "Online (Accepting rides)"
						: "Offline (Not accepting rides)"}
				</label>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{stats.map((stat, idx) => (
					<Card
						key={idx}
						className="shadow-sm"
					>
						<CardContent className="flex items-center gap-4 p-6">
							<div className="rounded-full bg-primary/10 p-3">
								{stat.icon}
							</div>
							<div>
								<div className="text-2xl font-bold">
									{stat.value}
								</div>
								<div className="text-muted-foreground text-sm">
									{stat.label}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				<Card>
					<CardContent className="p-6 flex flex-col gap-4">
						<h2 className="text-lg font-semibold mb-2">
							Quick Actions
						</h2>
						<div className="flex flex-wrap gap-4">
							<Button
								asChild
								size="lg"
								variant="default"
							>
								<Link href="/dashboard/available-rides">
									View Available Rides
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
							>
								<Link href="/dashboard/ride-history">
									View Ride History
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="secondary"
							>
								<Link href="/dashboard/profile">
									Edit Profile
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardContent className="p-6 text-center">
					<User className="mx-auto h-12 w-12 text-primary mb-2" />
					<div className="text-lg font-semibold">
						Drive safe and earn more with ZipRide!
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default DriverOverview;
