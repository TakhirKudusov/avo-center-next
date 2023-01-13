import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { handleTransformNftData } from './helpers';
import { NftData } from './types';

export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getNfts: builder.query({
      query: () => `nfts`,
      transformResponse: (baseQueryReturnValue: { data: NftData[] }) => {
        return handleTransformNftData(baseQueryReturnValue.data);
      },
    }),
  }),
});

export const { useGetNftsQuery } = nftApi;
