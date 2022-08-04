import React from 'react';
import Head from 'next/head';
import { WithChildrenProps } from 'types';
import { AnimatePresence, motion } from 'framer-motion';

type LayoutProps = WithChildrenProps;

function LoadingScreen() {
    return (
        <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 flex h-screen w-screen items-center justify-center bg-zinc-900 p-10">
            <div className="B w-full rounded-full lg:w-96">loading</div>
        </motion.div>
    );
}

export function Layout({ children }: LayoutProps) {
    //TODO: const { height, width } = useWindowDimensions();
    //TODO: Finish loading screen
    /*
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timeout);
    }, []);
    */

    //AnimatePresence doesn't actually work with children there, so no exit animations
    return (
        <div className="dark h-full min-h-screen w-screen">
            <div className="flex flex-col items-center justify-center">
                <Head>
                    <title>hi</title>
                    <meta name="description" content="Omari's Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex min-h-screen w-full grow flex-col bg-zinc-200 text-zinc-900 dark:bg-dark-900 dark:text-white">
                    <AnimatePresence>
                        <motion.div key="children">{children}</motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
