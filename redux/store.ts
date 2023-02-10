import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import attachmentsReducer from './slicers/attachmentsSlicer';
import authReducer from './slicers/authSlicer';
import bidsReducer from './slicers/bidsSlicer';
import collectionsReducer from './slicers/collectionsSlicer';
import nftsReducer from './slicers/nftsSlicer';
import notificationsReducer from './slicers/notificationsSlicer';
import profileReducer from './slicers/profileSlicer';
import userInteractionsReducer from './slicers/userInteractionsSlicer';

const combinedReducer = combineReducers({
  auth: authReducer,
  attachments: attachmentsReducer,
  notifications: notificationsReducer,
  profile: profileReducer,
  userInteractions: userInteractionsReducer,
  bids: bidsReducer,
  collections: collectionsReducer,
  nfts: nftsReducer,
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
      }),
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
