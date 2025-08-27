import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				data: credentials,
			}),
		}),
		register: builder.mutation({
			query: (payload) => ({
				url: "/user/register",
				method: "POST",
				data: payload,
			}),
		}),
		user: builder.query({
			query: () => ({
				url: "/user/me",
				method: "GET",
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
		}),
		changePassword: builder.mutation({
			query: (payload) => ({
				url: "/auth/change-password",
				method: "PATCH",
				data: payload,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useUserQuery,
	useLogoutMutation,
	useChangePasswordMutation,
} = authApi;
