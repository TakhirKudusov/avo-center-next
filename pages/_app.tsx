import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '../components/common';
import { AppWithPageLayout } from '../common/types';
import { wrapper } from '../redux/store';
import { getUserInfo } from '../common/helpers/jwt-token.helper';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/slicers/authSlicer';
import { useEffect } from 'react';
import '../components/ui-kit/DatePicker/DatePicker.css';
import { OpenAPI } from '../swagger';

function App({ Component, pageProps }: AppWithPageLayout) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  OpenAPI.BASE = '/api';

  useEffect(() => {
    OpenAPI.TOKEN = String(localStorage.getItem('accessToken'));

    const user = getUserInfo();
    dispatch(setUser(user));
  }, [dispatch]);

  return (
    <>
      <Global />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} key={router.asPath} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default wrapper.withRedux(App);
