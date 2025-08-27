import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
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
	}),
});

export const { useMyRidesQuery, useBookRideMutation, useActiveRideQuery } =
	rideApi;
