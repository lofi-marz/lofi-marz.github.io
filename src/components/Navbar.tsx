import {
    motion,
    useAnimationControls,
    useScroll,
    useTransform,
    Variant,
    Variants,
} from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Section, WithChildrenProps } from '../types';
import classNames from 'classnames';
import {
    FaArrowUp,
    FaAt,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
import { SectionContext } from './SectionContext';

type NavItemProps = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> &
    WithChildrenProps;

function NavItem({ href, children, target, className }: NavItemProps) {
    return (
        <motion.li
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
            }}
            initial="hidden"
            animate="show"
            className={classNames('mx-5 transition-all', className)}>
            <a href={href} target={target}>
                {children}
            </a>
        </motion.li>
    );
}

export function NavbarSpacer() {
    return <div className="h-16 w-full"></div>;
}

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

export function Navbar() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();
    useState();
    const [scrollingDown, setScrollingDown] = useState(true);
    const section = useContext(SectionContext);

    const navVariants: Variants = {
        hidden: { opacity: 0 },
        intro: { width: '100%', justifyContent: 'end' },
        about: { width: '10%', justifyContent: 'center' },
    };

    const socialVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.div
            className="relative flex h-screen items-center bg-primary py-10 text-3xl text-white sm:justify-end"
            transition={{ ease: 'easeInOut' }}
            variants={navVariants}
            initial="intro"
            animate={section}
            layoutId="red-section"
            layout>
            <motion.div
                className="fixed flex flex-col gap-5 px-2 sm:px-5"
                variants={socialVariants}
                layout>
                <FaInstagram />
                <FaLinkedin />
                <FaAt />
                <FaGithub />
            </motion.div>
            <div
                className="absolute bottom-10 flex rotate-180 flex-row items-center justify-center gap-2 px-2 text-xl sm:px-5"
                style={{ writingMode: 'vertical-rl' }}>
                {<Arrow />}
            </div>
        </motion.div>
    );
}
