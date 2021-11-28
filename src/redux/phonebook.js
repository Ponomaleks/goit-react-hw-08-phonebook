import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6198b49a164fa60017c23190.mockapi.io/contacts' }),
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
      query: newCotact => ({
        url: `/`,
        method: 'POST',
        body: newCotact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } =
  phonebookApi;
