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
	}),
});

export const { useLoginMutation } = authApi;
