import {
    AnimateSharedLayout,
    motion,
    useScroll,
    useSpring,
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
import React, { useContext, useRef, useState } from 'react';
import { AnimatedIconLink } from '../IconLink';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SectionProps } from '../../types';
import { SetSectionContext } from '../SectionContext';

export function Intro({ onViewportEnter }: SectionProps) {
    //[calc(100vh-4rem)]
    const [selectedSocial, setSelectedSocial] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });
    const setSection = useContext(SetSectionContext);

    scrollYProgress.onChange((y) => {
        console.log(y);
        if (y > 0.5) {
            setSection('about');
        } else {
            setSection('intro');
        }
    });
    return (
        <motion.section
            className="h-[150vh] w-full snap-center"
            ref={ref}
            onViewportEnter={onViewportEnter}
            viewport={{ margin: '-10% 0% -10% 0%' }}>
            <motion.section
                id="home"
                className="sticky bottom-0 flex h-screen w-full flex-row items-center justify-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeInOut' }}
                viewport={{ once: true }}
                layout>
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
        </motion.section>
    );
}
