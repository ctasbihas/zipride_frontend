import { useUserQuery } from "@/redux/features/auth/auth.api";
import Analytics from "./admin/analytics";
import DriverOverview from "./driver/overview";
import RiderOverview from "./rider/overview";

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
