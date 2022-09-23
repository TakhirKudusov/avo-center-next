import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.FC<any>;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const router = useRouter();

  return (
    <>
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
