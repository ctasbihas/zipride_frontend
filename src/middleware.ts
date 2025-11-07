import { NextRequest, NextResponse } from "next/server";

/* // Constants
const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/login", "/register"];

const ROLE_DASHBOARDS = {
	admin: "/dashboard/admin/analytics",
	driver: "/dashboard/driver/overview",
	rider: "/dashboard/rider/overview",
} as const;

// Role-based route access control
const ROUTE_PERMISSIONS: Record<string, string[]> = {
	"/dashboard/book-ride": ["rider"],
	"/dashboard/active-ride": ["rider", "driver"],
	"/dashboard/ride-history": ["rider", "driver"],
	"/dashboard/profile": ["rider", "driver", "admin"],
	"/dashboard/settings": ["rider", "driver", "admin"],
	"/dashboard/available-rides": ["driver"],
	"/dashboard/earnings": ["driver"],
	"/dashboard/users": ["admin"],
	"/dashboard/rides": ["admin"],
};

type UserRole = keyof typeof ROLE_DASHBOARDS;

interface UserData {
	role?: string;
}

// Helper functions
async function validateToken(token: string): Promise<{
	isAuthenticated: boolean;
	userData: UserData | null;
}> {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/me`,
			{
				headers: { Cookie: `token=${token}` },
				credentials: "include",
			}
		);

		if (response.ok) {
			const result = await response.json();
			return {
				isAuthenticated: true,
				userData: result?.data || result,
			};
		}
	} catch (error) {
		console.error("Auth check failed:", error);
	}

	return { isAuthenticated: false, userData: null };
}

function getRoleDashboard(role?: string): string {
	const normalizedRole = role?.toLowerCase() as UserRole;
	return ROLE_DASHBOARDS[normalizedRole] || "/dashboard";
}

function isRouteMatch(pathname: string, routes: string[]): boolean {
	return routes.some((route) => pathname.startsWith(route));
}

function hasRoleAccess(pathname: string, userRole?: string): boolean {
	const allowedRoles = ROUTE_PERMISSIONS[pathname];
	if (!allowedRoles) return true; // No restrictions
	if (!userRole) return false;
	return allowedRoles.includes(userRole.toLowerCase());
} */

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	console.log(pathname, request.cookies);
	const protectedRoutes = ["/dashboard"];

	if (protectedRoutes.some((route) => pathname.startsWith(route))) {
		const token = request.cookies.get("token");
		if (!token) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	/* const isProtectedRoute = isRouteMatch(pathname, PROTECTED_ROUTES);
	const isAuthRoute = isRouteMatch(pathname, AUTH_ROUTES);

	const token = request.cookies.get("token")?.value;
	const { isAuthenticated, userData } = token
		? await validateToken(token)
		: { isAuthenticated: false, userData: null };

	if (isProtectedRoute && !isAuthenticated) {
		const loginUrl = new URL("/login", request.url);
		loginUrl.searchParams.set("redirect", pathname);
		return NextResponse.redirect(loginUrl);
	}

	if (isAuthRoute && isAuthenticated) {
		return NextResponse.redirect(
			new URL(getRoleDashboard(userData?.role), request.url)
		);
	}

	if (
		isProtectedRoute &&
		isAuthenticated &&
		(pathname === "/dashboard" || pathname === "/dashboard/")
	) {
		return NextResponse.redirect(
			new URL(getRoleDashboard(userData?.role), request.url)
		);
	}

	if (
		isProtectedRoute &&
		isAuthenticated &&
		!hasRoleAccess(pathname, userData?.role)
	) {
		return NextResponse.redirect(
			new URL(getRoleDashboard(userData?.role), request.url)
		);
	} */

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
