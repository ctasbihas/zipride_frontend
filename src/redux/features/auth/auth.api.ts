import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
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
	}),
});

export const { useLoginMutation, useRegisterMutation, useUserQuery } = authApi;
