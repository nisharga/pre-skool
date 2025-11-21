"use client";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "./utils/cookie";


const baseQuery = fetchBaseQuery({
 baseUrl: process.env.NEXT_PUBLIC_BASE_SERVER_API,
 // credentials: "include",
 prepareHeaders: (headers) => {
   const accessToken = getAccessToken();
   if (accessToken) {
     headers.set("Authorization", `Bearer ${accessToken}`)
   }
   return headers;
 },
});


const apiSlice = createApi({
 reducerPath: "api",
 baseQuery: baseQuery,
 endpoints: () => ({}),
 tagTypes: ["CLIENT_PROFILE", "WEBSITE_SETTINGS", "BANNERS", "CATEGORIES", "SUB_CATEGORIES", "PRODUCTS", "SLIDER", "FEATURED_API", "ORDERS", "STATISTICS", "USER", "DIGITAL_PRODUCTS", "BOOK_REQUESTS"],
});


export default apiSlice;