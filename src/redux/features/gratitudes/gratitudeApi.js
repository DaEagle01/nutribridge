import { baseApi } from "../../api/baseApi";

const gratitudesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGratitudes: builder.query({
      query: () => ({
        url: "/gratitudes",
        method: "GET",
      }),
      providesTags: ['gratitudeItems'],
    }),

    createGratitude: builder.mutation({
      query: (userInfo) => ({
        url: "/gratitudes",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ['gratitudeItems']
    }),
  }),
});

export const { useGetGratitudesQuery, useCreateGratitudeMutation } = gratitudesApi;
