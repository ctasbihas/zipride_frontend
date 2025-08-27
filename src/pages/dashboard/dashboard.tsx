import { useUserQuery } from "@/redux/features/auth/auth.api";
import RiderOverview from "./rider/overview";

const Dashboard = () => {
	const { data } = useUserQuery(undefined);

	switch (data?.data?.role) {
		case "admin":
			return <div>Admin Dashboard</div>;
		case "rider":
			return <RiderOverview />;
		case "driver":
			return <div>Driver Dashboard</div>;
		default:
			return null;
	}
};

export default Dashboard;
