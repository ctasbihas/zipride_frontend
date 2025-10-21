import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["User", "Users", "Ride", "Rides", "Driver", "Auth"],
	keepUnusedDataFor: 300,
	endpoints: () => ({}),
});
