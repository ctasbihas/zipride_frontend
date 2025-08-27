import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		users: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),
	}),
});

export const { useUsersQuery } = userApi;
