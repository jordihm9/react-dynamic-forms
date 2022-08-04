import type { AppProps } from 'next/app';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

App.displayName = 'Dynamic Forms App';

export default App;
