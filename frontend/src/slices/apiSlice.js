import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' }); // baseUrl is the url of the backend, since we have used proxy in package.json, we don't need to specify the url here

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Project'],
    endpoints: (builder) => ({})
});