import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const serverURL = import.meta.env.MODE === "development" ? import.meta.env.VITE_SERVER_URL_DEV : import.meta.env.VITE_SERVER_URL_PROD;
console.log(import.meta.env)
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: serverURL,
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
