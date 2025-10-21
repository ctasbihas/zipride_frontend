import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		rides: builder.query({
			query: () => ({
				url: "/rides",
				method: "GET",
			}),
			providesTags: ["Rides"],
		}),
		myRides: builder.query({
			query: () => ({
				url: "/rides/me",
				method: "GET",
			}),
			providesTags: ["Ride"],
		}),
		bookRide: builder.mutation({
			query: (rideData) => ({
				url: "/rides/request",
				method: "POST",
				data: rideData,
			}),
			invalidatesTags: ["Rides", "Ride"],
		}),
		activeRide: builder.query({
			query: () => ({
				url: `/rides/active`,
				method: "GET",
			}),
			providesTags: ["Ride"],
		}),
		availableRides: builder.query({
			query: () => ({
				url: `/rides/available`,
				method: "GET",
			}),
			providesTags: ["Rides"],
		}),
		acceptRide: builder.mutation({
			query: (id: string) => ({
				url: `/rides/${id}/accept`,
				method: "PATCH",
			}),
			invalidatesTags: ["Rides", "Ride"],
		}),
		cancelRide: builder.mutation({
			query: (id: string) => ({
				url: `/rides/${id}/cancel`,
				method: "PATCH",
			}),
			invalidatesTags: ["Rides", "Ride"],
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
			invalidatesTags: ["Rides", "Ride"],
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
