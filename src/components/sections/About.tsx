import { motion } from 'framer-motion';
import {
    FaAt,
    FaChevronDown,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
import { SectionProps, WithChildrenProps } from '../../types';
import { IconLink } from '../IconLink';
import { NavbarSpacer } from '../Navbar';
import { fadeInLeftVariants } from '../../animations';
import React from 'react';
import { BackgroundSketch } from '../BackgroundSketch';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

const imageVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export function About({ onViewportEnter }: SectionProps) {
    //[calc(100vh-4rem)]
    return (
        <motion.section
            onViewportEnter={onViewportEnter}
            viewport={{ margin: '-10% 0% -10% 0%' }}
            className="flex h-screen w-full snap-center flex-row items-center justify-center p-48"
            id="about">
            <div>
                <h1 className="w-fit font-title text-5xl font-bold">
                    <p className="relative z-10">about me</p>
                    <div className="relative bottom-3 z-0 h-[1rem] w-4/5 bg-primary" />
                </h1>
                <motion.div
                    className="font-text text-2xl text-dark-900"
                    variants={fadeInLeftVariants}>
                    Hi, 👋 I&apos;m Omari! <br /> I&apos;m a Front-End Developer
                    from England. <br />
                    You can find me at the{' '}
                    <a
                        href="https://www.nottinghampost.com/news/nottingham-news/picture-shows-huge-gaggle-geese-3383819"
                        className="link">
                        University of Nottingham
                    </a>
                    {'. '}
                    <br />I like making fun,{' '}
                    <a
                        className="link"
                        href="https://p5js-experiments-gamma.vercel.app/">
                        creative
                    </a>{' '}
                    things with code.
                </motion.div>
            </div>
            <div className="flex w-full items-center md:h-full md:w-1/2">
                <motion.div
                    className="m-auto w-full max-w-sm border-l-8 border-primary pl-3 md:w-80 lg:w-96"
                    initial="hidden"
                    whileInView="show"
                    transition={{
                        duration: 1,
                        staggerChildren: 0.5,
                    }}
                    viewport={{ once: true }}
                    variants={imageVariants}>
                    <img
                        className="saturate-0"
                        src="me.jpg"
                        alt="Picture of me"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
