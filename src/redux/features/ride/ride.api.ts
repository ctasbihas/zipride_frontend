import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		rides: builder.query({
			query: () => ({
				url: "/rides",
				method: "GET",
			}),
		}),
		myRides: builder.query({
			query: () => ({
				url: "/rides/me",
				method: "GET",
			}),
		}),
		bookRide: builder.mutation({
			query: (rideData) => ({
				url: "/rides/request",
				method: "POST",
				data: rideData,
			}),
		}),
		activeRide: builder.query({
			query: () => ({
				url: `/rides/active`,
				method: "GET",
			}),
		}),
		availableRides: builder.query({
			query: () => ({
				url: `/rides/available`,
				method: "GET",
			}),
		}),
		acceptRide: builder.mutation({
			query: (id: string) => ({
				url: `/rides/${id}/accept`,
				method: "PATCH",
			}),
		}),
		cancelRide: builder.mutation({
			query: (id: string) => ({
				url: `/rides/${id}/cancel`,
				method: "PATCH",
			}),
		}),
		updateRideStatus: builder.mutation({
			query: ({
				id,
				rideStatus,
			}: {
				id: string;
				rideStatus: string;
			}) => ({
				url: `/rides/${id}/status`,
				method: "PATCH",
				data: { rideStatus },
			}),
		}),
	}),
});

export const {
	useRidesQuery,
	useMyRidesQuery,
	useBookRideMutation,
	useActiveRideQuery,
	useAvailableRidesQuery,
	useAcceptRideMutation,
	useCancelRideMutation,
	useUpdateRideStatusMutation,
} = rideApi;
