import { baseApi } from "../../api/baseApi";

const suppliesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplyItems: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ['supplyItems'],
    }),

    getSingleItem: builder.query({
      query: ({ id }) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
    }),

    createSupplyItem: builder.mutation({
      query: (data) => ({
        url: "/supplies",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['supplyItems']
    }),

    updateSupplyItem: builder.mutation({
      query: (data) => {
        return {
          url: `/supplies/${data._id}`,
          method: "PATCH",
          body: data,
        }
      },
      invalidatesTags: ['supplyItems']
    }),

    deleteSupplyItem: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['supplyItems']
    }),
  }),
});

export const { useGetSupplyItemsQuery, useGetSingleItemQuery, useCreateSupplyItemMutation, useUpdateSupplyItemMutation, useDeleteSupplyItemMutation } = suppliesApi;
