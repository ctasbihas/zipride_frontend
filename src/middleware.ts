import { NextRequest, NextResponse } from "next/server";

// Define role-based route permissions (matches withAuth configuration)
const routePermissions: Record<string, string[]> = {
	"/dashboard/book-ride": ["rider"],
	"/dashboard/active-ride": ["rider", "driver"],
	"/dashboard/ride-history": ["rider", "driver"],
	"/dashboard/profile": ["rider", "driver", "admin"],
	"/dashboard/settings": ["rider", "driver", "admin"],
	"/dashboard/available-rides": ["driver"],
	"/dashboard/earnings": ["driver"],
	"/dashboard/users": ["admin"],
	"/dashboard/rides": ["admin"],
	// Role-specific nested routes
	"/dashboard/admin": ["admin"],
	"/dashboard/driver": ["driver"],
	"/dashboard/rider": ["rider"],
};

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Protected routes that require authentication
	const protectedRoutes = ["/dashboard"];
	const authRoutes = ["/login", "/register"];

	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route)
	);
	const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

	// Get the token cookie
	const token = request.cookies.get("token")?.value;

	// Check if user is authenticated and get user data
	let isAuthenticated = false;
	let userData: { role?: string } | null = null;

	if (token) {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/me`,
				{
					headers: {
						Cookie: `token=${token}`,
					},
					credentials: "include",
				}
			);

			if (response.ok) {
				const result = await response.json();
				userData = result?.data || result;
				isAuthenticated = true;
			}
		} catch (error) {
			console.error("Auth check failed:", error);
			isAuthenticated = false;
		}
	}

	// Redirect unauthenticated users away from protected routes
	if (isProtectedRoute && !isAuthenticated) {
		const loginUrl = new URL("/login", request.url);
		loginUrl.searchParams.set("redirect", pathname);
		return NextResponse.redirect(loginUrl);
	}

	// Redirect authenticated users away from auth pages
	if (isAuthRoute && isAuthenticated) {
		const userRole = userData?.role?.toLowerCase();
		// Redirect to role-specific dashboard
		if (userRole === "admin") {
			return NextResponse.redirect(
				new URL("/dashboard/admin/analytics", request.url)
			);
		} else if (userRole === "driver") {
			return NextResponse.redirect(
				new URL("/dashboard/driver/overview", request.url)
			);
		} else if (userRole === "rider") {
			return NextResponse.redirect(
				new URL("/dashboard/rider/overview", request.url)
			);
		}
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// Role-based authorization for protected routes
	if (isProtectedRoute && isAuthenticated && userData?.role) {
		const userRole = userData.role.toLowerCase();

		// Base /dashboard route - redirect to role-specific overview
		if (pathname === "/dashboard" || pathname === "/dashboard/") {
			if (userRole === "admin") {
				return NextResponse.redirect(
					new URL("/dashboard/admin/analytics", request.url)
				);
			} else if (userRole === "driver") {
				return NextResponse.redirect(
					new URL("/dashboard/driver/overview", request.url)
				);
			} else if (userRole === "rider") {
				return NextResponse.redirect(
					new URL("/dashboard/rider/overview", request.url)
				);
			}
		}

		// Check if the route requires specific roles
		let requiredRoles: string[] | undefined;
		let hasAccess = false;

		// Find matching route permission
		for (const [route, roles] of Object.entries(routePermissions)) {
			if (pathname.startsWith(route)) {
				requiredRoles = roles;
				break;
			}
		}

		// If route has role requirements, check if user has access
		if (requiredRoles) {
			hasAccess = requiredRoles.includes(userRole);
		} else {
			// Routes not in routePermissions are accessible by all authenticated users
			hasAccess = true;
		}

		// If user doesn't have access, redirect to their role's default page
		if (!hasAccess) {
			if (userRole === "admin") {
				return NextResponse.redirect(
					new URL("/dashboard/admin/analytics", request.url)
				);
			} else if (userRole === "driver") {
				return NextResponse.redirect(
					new URL("/dashboard/driver/overview", request.url)
				);
			} else if (userRole === "rider") {
				return NextResponse.redirect(
					new URL("/dashboard/rider/overview", request.url)
				);
			}
			// Fallback to base dashboard
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};
