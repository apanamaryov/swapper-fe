import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/auth/' }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `users`,
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
      }),
    }),
    signUp: builder.mutation({
      query: (body) => ({ url: 'signUp', method: 'POST', body }),
    }),
    signIn: builder.mutation({
      query: (body) => ({ url: 'signIn', method: 'POST', body }),
      transformResponse: (response: { accessToken: string }) => {
        localStorage.setItem('accessToken', response.accessToken)
        return response;
      },
    }),
  }),
})

export const { useGetUsersQuery, useSignUpMutation, useSignInMutation } = authApi;
