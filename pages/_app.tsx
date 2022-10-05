import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import {Global} from "../components/common";
import {AppWithPageLayout} from "../common/types";

function MyApp({ Component, pageProps }: AppWithPageLayout) {
  const router = useRouter();

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

export default MyApp;
