import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import ipfsReducer from './slicers/ipfsSlicer';
import authReducer from './slicers/authSlicer';
import { adminApi } from './APIs/adminApi';
import bidsReducer from './slicers/bidsSlicer';
import collectionsReducer from './slicers/collectionsSlicer';
import discoverReducer from './slicers/discoverSlicer';
import nftsReducer from './slicers/nftsSlicer';
import notificationsReducer from './slicers/notificationsSlicer';
import profileReducer from './slicers/profileSlicer';
import searchReducer from './slicers/searchSlicer';
import userInteractionsReducer from './slicers/userInteractionsSlicer';

const combinedReducer = combineReducers({
  [adminApi.reducerPath]: adminApi.reducer,
  auth: authReducer,
  ipfs: ipfsReducer,
  notifications: notificationsReducer,
  profile: profileReducer,
  userInteractions: userInteractionsReducer,
  bids: bidsReducer,
  collections: collectionsReducer,
  nfts: nftsReducer,
  discover: discoverReducer,
  search: searchReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(adminApi.middleware),
  } as any);

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
