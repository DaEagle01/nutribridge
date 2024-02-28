import { baseApi } from "../../api/baseApi";

const volunteersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getVolunteers: builder.query({
            query: () => ({
                url: "/volunteers",
                method: "GET",
            }),
            providesTags: ['volunteers'],
        }),

        createVolunteer: builder.mutation({
            query: (data) => ({
                url: "/volunteers",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['volunteers']
        }),
    }),
});

export const { useGetVolunteersQuery, useCreateVolunteerMutation } = volunteersApi;
