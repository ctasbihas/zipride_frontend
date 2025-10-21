import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		users: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
			providesTags: ["Users"],
		}),
	}),
});

export const { useUsersQuery } = userApi;
