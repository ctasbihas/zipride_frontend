import { useUserQuery } from "@/redux/features/auth/auth.api";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: string[]) => {
	return function AuthWrapper() {
		const { data, isLoading } = useUserQuery(undefined);

		if (isLoading) {
			return <h1>Loading...</h1>;
		}

		if (!isLoading && !data?.data?.email) {
			return <Navigate to="/login" />;
		}

		if (
			requiredRole &&
			!isLoading &&
			!requiredRole.includes(data?.data?.role)
		) {
			return <Navigate to="/dashboard" />;
		} else {
			return <Component />;
		}
	};
};
