import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantApiProps } from '../utilities/Types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<RestaurantApiProps[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurant: builder.query<RestaurantApiProps, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsListQuery, useGetRestaurantQuery } = api

export default api
