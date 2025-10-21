import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				data: credentials,
			}),
			invalidatesTags: ["User"],
		}),
		register: builder.mutation({
			query: (payload) => ({
				url: "/user/register",
				method: "POST",
				data: payload,
			}),
			invalidatesTags: ["User"],
		}),
		user: builder.query({
			query: () => ({
				url: "/user/me",
				method: "GET",
			}),
			providesTags: ["User"],
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
			invalidatesTags: ["User", "Rides", "Driver"],
		}),
		changePassword: builder.mutation({
			query: (payload) => ({
				url: "/auth/change-password",
				method: "PATCH",
				data: payload,
			}),
		}),
		updateProfile: builder.mutation({
			query: (payload) => ({
				url: `/user/${payload.id}`,
				method: "PATCH",
				data: payload,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useUserQuery,
	useLogoutMutation,
	useChangePasswordMutation,
	useUpdateProfileMutation,
} = authApi;
