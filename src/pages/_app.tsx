import { FC, PropsWithChildren } from 'react';
import { UiContext } from '../components';
import '../styles/globals.css';

const Noop: FC<PropsWithChildren<{}>> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = (Component as any).Layout || Noop;
  return (
    <UiContext>
      <Layout pageProps={{ ...pageProps }}>
        <Component {...pageProps} />
      </Layout>
    </UiContext>
  );
}

export default MyApp;
