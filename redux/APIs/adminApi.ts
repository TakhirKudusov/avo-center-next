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
import { BaseQueryArg } from '@reduxjs/toolkit/src/query/baseQueryTypes';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    adminLogin: builder.query({
      query: (body) => ({
        url: 'auth/admin-auth',
        method: 'POST',
        body,
      }),
    }),
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
      transformResponse: (baseQueryReturnValue: { data: BidData[] }) => {
        return handleTransformBidsData(baseQueryReturnValue.data);
      },
    }),
    getFaqs: builder.query({
      query: () => `faqs`,
      transformResponse: (baseQueryReturnValue: { data: FaqsData[] }) => {
        return handleTransformFaqsData(baseQueryReturnValue.data);
      },
    }),
    getReports: builder.query({
      query: () => `reports`,
      transformResponse: (baseQueryReturnValue: { data: ReportData[] }) => {
        return handleTransformReportsData(baseQueryReturnValue.data);
      },
    }),
    getNotifications: builder.query({
      query: () => `notifications`,
      transformResponse: (baseQueryReturnValue: {
        data: NotificationData[];
      }) => {
        return handleTransformNotificationsData(baseQueryReturnValue.data);
      },
    }),
    getCategories: builder.query({
      query: () => `categories`,
      transformResponse: (baseQueryReturnValue: { data: CategoryData[] }) => {
        return handleTransformCategoriesData(baseQueryReturnValue.data);
      },
    }),
    getSellers: builder.query({
      query: () => `user-interactions/sellers`,
      transformResponse: (baseQueryReturnValue: { data: SellersData[] }) => {
        return handleTransformSellersData(baseQueryReturnValue.data);
      },
    }),
    getCreators: builder.query({
      query: () => `user-interactions/creators`,
      transformResponse: (baseQueryReturnValue: { data: CreatorsData[] }) => {
        return handleTransformCreatorsData(baseQueryReturnValue.data);
      },
    }),
    getVerifications: builder.query({
      query: () => `verifications`,
      transformResponse: (baseQueryReturnValue: {
        data: VerificationData[];
      }) => {
        return handleTransformVerificationsData(baseQueryReturnValue.data);
      },
    }),
  }),
});

export const {
  useGetNftsQuery,
  useGetUsersQuery,
  useGetCollectionsQuery,
  useGetBidsQuery,
  useLazyAdminLoginQuery,
  useGetFaqsQuery,
  useGetReportsQuery,
  useGetNotificationsQuery,
  useGetCategoriesQuery,
  useGetCreatorsQuery,
  useGetSellersQuery,
  useGetVerificationsQuery,
} = adminApi;
