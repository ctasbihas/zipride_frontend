"use client";

import { useUserQuery } from "@/redux/features/auth/auth.api";
import DriverActiveRide from "../driver/activeRide";
import RiderActiveRide from "../rider/activeRide";

const ActiveRide = () => {
	const { data } = useUserQuery(undefined);

	switch (data?.data?.role) {
		case "rider":
			return <RiderActiveRide />;
		case "driver":
			return <DriverActiveRide />;
		default:
			return null;
	}
};

export default ActiveRide;
