"use client";

import { useUserQuery } from "@/redux/features/auth/auth.api";
import Analytics from "./admin/analytics/page";
import DriverOverview from "./driver/overview/page";
import RiderOverview from "./rider/overview/page";

const Dashboard = () => {
	const { data } = useUserQuery(undefined);

	switch (data?.data?.role) {
		case "admin":
			return <Analytics />;
		case "rider":
			return <RiderOverview />;
		case "driver":
			return <DriverOverview />;
		default:
			return null;
	}
};

export default Dashboard;
