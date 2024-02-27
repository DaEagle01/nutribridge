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
      query: (userInfo) => ({
        url: "/supplies",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ['supplyItems']
    }),

    updateSupplyItem: builder.mutation({
      query: (userInfo) => {
        return {
          url: `/supplies/${userInfo._id}`,
          method: "PATCH",
          body: userInfo,
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
