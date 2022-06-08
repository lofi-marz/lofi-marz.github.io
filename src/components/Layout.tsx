import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { WithChildrenProps } from 'types';
import { motion } from 'framer-motion';

type LayoutProps = WithChildrenProps;

function LoadingScreen() {
    return (
        <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-screen">
            loading
        </motion.div>
    );
}

export function Layout({ children }: LayoutProps) {
    //TODO: const { height, width } = useWindowDimensions();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    //AnimatePresence doesn't actually work with children there, so no exit animations
    return (
        <div className="dark h-full min-h-screen w-screen">
            <div className="flex flex-col items-center justify-center dark:bg-zinc-900">
                <Head>
                    <title>hi</title>
                    <meta name="description" content="Omari's Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="min-h-screen w-screen grow dark:bg-zinc-900 dark:text-white">
                    {children}
                </main>
            </div>
        </div>
    );
}
