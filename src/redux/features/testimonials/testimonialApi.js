import { baseApi } from "../../api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTestimonials: builder.query({
            query: () => ({
                url: "/testimonials",
                method: "GET",
            }),
            providesTags: ['testimonials'],
        }),

        createTestimonial: builder.mutation({
            query: (data) => ({
                url: "/testimonials",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['testimonials']
        }),
    }),
});

export const { useGetTestimonialsQuery, useCreateTestimonialMutation } = testimonialsApi;
