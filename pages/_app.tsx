import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<NavBar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
