import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		earningsSummary: builder.query({
			query: () => ({
				url: "/drivers/earnings/summary",
				method: "GET",
			}),
		}),
		earningsChart: builder.query({
			query: () => ({
				url: "/drivers/earnings/chart",
				method: "GET",
			}),
		}),
		toggleActive: builder.mutation({
			query: ({ id, activeStatus }) => ({
				url: `/drivers/${id}`,
				method: "PATCH",
				body: { activeStatus },
			}),
		}),
	}),
});

export const {
	useEarningsSummaryQuery,
	useEarningsChartQuery,
	useToggleActiveMutation,
} = driverApi;
