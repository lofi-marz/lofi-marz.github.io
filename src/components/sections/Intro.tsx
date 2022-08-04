import { AnimateSharedLayout, motion } from 'framer-motion';
import {
    FaAt,
    FaBook,
    FaChevronDown,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { BackgroundSketch } from '../BackgroundSketch';
import React, { useState } from 'react';
import { AnimatedIconLink, IconLink } from '../IconLink';

function Chevron() {
    return (
        <a className="" href="#about">
            <FaChevronDown />
        </a>
    );
}

export function Intro() {
    //[calc(100vh-4rem)]
    const [selectedSocial, setSelectedSocial] = useState(-1);
    return (
        <motion.section
            id="home"
            className="flex h-screen w-full flex-col items-center justify-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ once: true }}
            layout>
            <div className="aspect-square w-96 max-w-[100vw] items-center justify-center p-5">
                <BackgroundSketch />
            </div>
            <div className="flex w-full flex-col items-center justify-center font-title text-5xl font-bold mix-blend-difference invert dark:invert-0">
                <h1>hi, I&apos;m omari</h1>
                <h2 className="text-gradient  text-2xl">
                    web developer + student
                </h2>
                <span className="flex w-min">
                    <IconLink href="https://github.com/lofi-marz/">
                        <FaGithub />
                    </IconLink>
                    <IconLink href="https://www.linkedin.com/in/omari-thompson-edwards-b7307b195/">
                        <FaLinkedin />
                    </IconLink>
                    <IconLink href="mailto:othompsonedwards@gmail.com">
                        <FaAt />
                    </IconLink>
                    <IconLink href="Omari Thompson-Edwards CV.pdf">
                        <FaBook />
                    </IconLink>
                </span>

                <Chevron />
            </div>
        </motion.section>
    );
}
