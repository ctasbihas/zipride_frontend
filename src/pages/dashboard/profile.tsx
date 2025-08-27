import { useUserQuery } from "@/redux/features/auth/auth.api";
import DriverProfile from "./driver/profile";
import RiderProfile from "./rider/profile";

const Profile = () => {
	const { data } = useUserQuery(undefined);

	switch (data?.data?.role) {
		case "rider":
			return <RiderProfile />;
		case "driver":
			return <DriverProfile />;
		default:
			return null;
	}
};

export default Profile;
