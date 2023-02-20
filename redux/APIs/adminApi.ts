import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  handleTransformBidsData,
  handleTransformCategoriesData,
  handleTransformCollectionsData,
  handleTransformCreatorsData,
  handleTransformFaqsData,
  handleTransformNftData,
  handleTransformNotificationsData,
  handleTransformReportsData,
  handleTransformSellersData,
  handleTransformUsersData,
  handleTransformVerificationsData,
} from './helpers';
import {
  BidData,
  CategoryData,
  CollectionData,
  CreatorsData,
  FaqsData,
  NftData,
  NotificationData,
  ReportData,
  SellersData,
  UserData,
  VerificationData,
} from './types';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken');
      headers.set('Authorization', 'Bearer ' + accessToken);
      return headers;
    },
  }),
  tagTypes: [
    'FAQ',
    'USER',
    'NFT',
    'COLLECTION',
    'CATEGORY',
    'VERIFICATION',
    'REPORT',
    'BID',
  ],
  endpoints: (builder) => ({
    adminLogin: builder.query({
      query: (body) => ({
        url: 'auth/admin-auth',
        method: 'POST',
        body,
      }),
    }),
    //==>NFT<==
    getNfts: builder.query({
      query: () => `nfts/all`,
      transformResponse: (baseQueryReturnValue: { data: NftData[] }) => {
        return handleTransformNftData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'NFT', id }],
    }),
    //==>USER<==
    getUsers: builder.query({
      query: () => `users`,
      transformResponse: (baseQueryReturnValue: { data: UserData[] }) => {
        return handleTransformUsersData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'USER', id }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['USER'],
    }),
    //==>COLLECTION<==
    getCollections: builder.query({
      query: () => `collections`,
      transformResponse: (baseQueryReturnValue: { data: CollectionData[] }) => {
        return handleTransformCollectionsData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'COLLECTION', id }],
    }),
    createCollections: builder.mutation({
      query: (body) => ({
        url: 'collections',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['COLLECTION'],
    }),
    deleteCollections: builder.mutation({
      query: (id) => ({
        url: `collections/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['COLLECTION'],
    }),
    updateCollections: builder.mutation({
      query: ({ id, body }) => ({
        url: `collections/${id}`,
        method: 'COLLECTION',
        body,
      }),
      invalidatesTags: ['COLLECTION'],
    }),
    //==>FAQ<==
    getFaqs: builder.query({
      query: () => `faqs`,
      transformResponse: (baseQueryReturnValue: { data: FaqsData[] }) => {
        return handleTransformFaqsData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'FAQ', id }],
    }),
    createFaq: builder.mutation({
      query: (body) => ({
        url: 'faqs',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['FAQ'],
    }),
    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `faqs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['FAQ'],
    }),
    updateFaq: builder.mutation({
      query: ({ id, body }) => ({
        url: `faqs/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['FAQ'],
    }),
    //==>REPORT<==
    getReports: builder.query({
      query: () => `reports`,
      transformResponse: (baseQueryReturnValue: { data: ReportData[] }) => {
        return handleTransformReportsData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'REPORT', id }],
    }),
    deleteReports: builder.mutation({
      query: (id) => ({
        url: `reports/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['REPORT'],
    }),
    updateReportsProcess: builder.mutation({
      query: ({ id }) => ({
        url: `reports/process/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['REPORT'],
    }),
    updateReportsComplete: builder.mutation({
      query: ({ id }) => ({
        url: `reports/complete/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['REPORT'],
    }),
    //==>CATEGORY<==
    getCategories: builder.query({
      query: () => `categories`,
      transformResponse: (baseQueryReturnValue: { data: CategoryData[] }) => {
        return handleTransformCategoriesData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'CATEGORY', id }],
    }),
    createCategories: builder.mutation({
      query: (body) => ({
        url: 'categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['CATEGORY'],
    }),
    deleteCategories: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CATEGORY'],
    }),
    updateCategories: builder.mutation({
      query: ({ id, body }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['CATEGORY'],
    }),
    //==>SELLER<==
    getSellers: builder.query({
      query: () => `user-interactions/sellers`,
      transformResponse: (baseQueryReturnValue: SellersData[]) => {
        return handleTransformSellersData(baseQueryReturnValue);
      },
    }),
    //==>CREATOR<==
    getCreators: builder.query({
      query: () => `user-interactions/creators`,
      transformResponse: (baseQueryReturnValue: CreatorsData[]) => {
        return handleTransformCreatorsData(baseQueryReturnValue);
      },
    }),
    //==>VERIFICATION<==
    getVerifications: builder.query({
      query: () => `verifications`,
      transformResponse: (baseQueryReturnValue: {
        data: VerificationData[];
      }) => {
        return handleTransformVerificationsData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'VERIFICATION', id }],
    }),
    updateVerifications: builder.mutation({
      query: ({ id }) => ({
        url: `verifications/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['VERIFICATION'],
    }),
    //==>BIDS<==
    getBids: builder.query({
      query: () => `bids`,
      transformResponse: (baseQueryReturnValue: { data: BidData[] }) => {
        return handleTransformBidsData(baseQueryReturnValue.data);
      },
      providesTags: (result, error, id) => [{ type: 'BID', id }],
    }),
    deleteBids: builder.mutation({
      query: (id) => ({
        url: `bids/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BID'],
    }),
  }),
});

export const {
  useGetNftsQuery,
  useGetUsersQuery,
  useGetCollectionsQuery,
  useLazyAdminLoginQuery,
  useGetFaqsQuery,
  useGetReportsQuery,
  useGetCategoriesQuery,
  useGetCreatorsQuery,
  useGetSellersQuery,
  useGetVerificationsQuery,
  useCreateFaqMutation,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
  useDeleteUserMutation,
  useCreateCollectionsMutation,
  useDeleteCategoriesMutation,
  useCreateCategoriesMutation,
  useDeleteCollectionsMutation,
  useDeleteReportsMutation,
  useUpdateCategoriesMutation,
  useUpdateCollectionsMutation,
  useUpdateReportsCompleteMutation,
  useUpdateReportsProcessMutation,
  useUpdateVerificationsMutation,
  useDeleteBidsMutation,
  useGetBidsQuery,
} = adminApi;
