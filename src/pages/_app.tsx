import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Suspense fallback={<h1>test</h1>}>
                <Component {...pageProps} />
            </Suspense>
        </Layout>
    );
}

export default MyApp;
