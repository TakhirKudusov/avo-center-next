import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  handleTransformBidsData,
  handleTransformCollectionsData,
  handleTransformNftData,
  handleTransformUsersData,
} from './helpers';
import { BidsData, CollectionData, NftData, UserData } from './types';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getNfts: builder.query({
      query: () => `nfts`,
      transformResponse: (baseQueryReturnValue: { data: NftData[] }) => {
        return handleTransformNftData(baseQueryReturnValue.data);
      },
    }),
    getUsers: builder.query({
      query: () => `users`,
      transformResponse: (baseQueryReturnValue: { data: UserData[] }) => {
        return handleTransformUsersData(baseQueryReturnValue.data);
      },
    }),
    getCollections: builder.query({
      query: () => `collections`,
      transformResponse: (baseQueryReturnValue: { data: CollectionData[] }) => {
        return handleTransformCollectionsData(baseQueryReturnValue.data);
      },
    }),
    getBids: builder.query({
      query: () => `bids`,
      transformResponse: (baseQueryReturnValue: { data: BidsData[] }) => {
        return handleTransformBidsData(baseQueryReturnValue.data);
      },
    }),
    getFaqs: builder.query({
      query: () => `bids`,
      transformResponse: (baseQueryReturnValue: { data: BidsData[] }) => {
        return handleTransformBidsData(baseQueryReturnValue.data);
      },
    }),
  }),
});

export const {
  useGetNftsQuery,
  useGetUsersQuery,
  useGetCollectionsQuery,
  useGetBidsQuery,
} = adminApi;
