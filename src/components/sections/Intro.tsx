import {
    AnimateSharedLayout,
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';
import {
    FaArrowDown,
    FaArrowLeft,
    FaArrowUp,
    FaAt,
    FaBook,
    FaChevronDown,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
import { BackgroundSketch } from '../BackgroundSketch';
import React, { useRef, useState } from 'react';
import { AnimatedIconLink } from '../IconLink';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Arrow() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    return (
        <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            style={{ opacity }}
            transition={{ repeat: Infinity }}>
            <FaArrowUp />
        </motion.a>
    );
}

export function Intro() {
    //[calc(100vh-4rem)]
    const [selectedSocial, setSelectedSocial] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });
    scrollYProgress.onChange(console.log);

    const width = useTransform(scrollYProgress, [0, 1], ['100%', '20%']);
    const lg = useMediaQuery('lg');

    const socials = [];
    return (
        <section className="h-[200vh] w-full" ref={ref}>
            <motion.section
                id="home"
                className="sticky top-0 flex h-screen w-full flex-row items-center justify-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeOut' }}
                viewport={{ once: true }}
                layout>
                <motion.div
                    className="relative flex h-full items-center justify-center bg-primary py-10 text-3xl text-white sm:justify-end"
                    style={{ width }}
                    layoutId="red-section">
                    <div className="flex flex-col gap-5 px-5 sm:px-10">
                        <FaInstagram />
                        <FaLinkedin />
                        <FaAt />
                        <FaGithub />
                    </div>
                    <div
                        className="absolute bottom-10 flex rotate-180 flex-row items-center justify-center gap-2 px-10 text-xl"
                        style={{ writingMode: 'vertical-rl' }}>
                        {<Arrow />}
                    </div>
                </motion.div>
                <motion.div
                    className="flex w-full flex-col items-start justify-center p-10 font-title text-5xl font-bold"
                    layoutId="greeting">
                    <h1>hi, I&apos;m omari</h1>
                    <h2 className="text-5xl text-primary">
                        web developer + student
                    </h2>
                </motion.div>
                <motion.span className="fixed bottom-0 left-10 flex flex-col gap-10 pb-10">
                    {[...new Array(0)].map((_, i) => {
                        return (
                            <motion.button
                                className="relative z-10 flex h-5 w-5 items-center justify-center p-5"
                                key={i}
                                onMouseEnter={() => setSelectedSocial(i)}>
                                <p className="z-10">Hi</p>
                                {selectedSocial === i && (
                                    <motion.div
                                        className="absolute h-full w-full bg-primary"
                                        layoutId="social-selector"></motion.div>
                                )}
                            </motion.button>
                        );
                    })}
                </motion.span>
            </motion.section>
        </section>
    );
}
