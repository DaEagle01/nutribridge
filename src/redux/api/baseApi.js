import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://nutribridge-backend.vercel.app/api/v1",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
