import { useUserQuery } from "@/redux/features/auth/auth.api";
import DriverRideHistory from "./driver/rideHistory";
import RiderRideHistory from "./rider/rideHistory";

const RideHistory = () => {
	const { data } = useUserQuery(undefined);

	switch (data?.data?.role) {
		case "rider":
			return <RiderRideHistory />;
		case "driver":
			return <DriverRideHistory />;
		default:
			return null;
	}
};

export default RideHistory;
