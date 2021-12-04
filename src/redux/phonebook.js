import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // const token = localStorage.getItem('persist:auth')
      console.log(token);
      // // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      headers.set('authorization', `Bearer ${token}`);
      // }

      return headers;
    },
  }),

  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/`,
      providesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({ url: `/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    // editContact: builder.mutation({
    //   query: id => ({
    //     url: `/${id}`,
    //     method: 'PATCH',
    //     body: updatedContact,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } =
  phonebookApi;
