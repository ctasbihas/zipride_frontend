import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		earningsSummary: builder.query({
			query: () => ({
				url: "/drivers/earnings/summary",
				method: "GET",
			}),
			providesTags: ["Driver"],
		}),
		earningsChart: builder.query({
			query: () => ({
				url: "/drivers/earnings/chart",
				method: "GET",
			}),
			providesTags: ["Driver"],
		}),
		toggleActive: builder.mutation({
			query: ({ id, activeStatus }) => ({
				url: `/drivers/${id}`,
				method: "PATCH",
				data: { activeStatus },
			}),
			invalidatesTags: ["Driver", "User"],
		}),
	}),
});

export const {
	useEarningsSummaryQuery,
	useEarningsChartQuery,
	useToggleActiveMutation,
} = driverApi;
