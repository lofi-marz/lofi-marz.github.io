import { motion } from 'framer-motion';
import React from 'react';
import { WithChildrenProps } from '../types';
import classNames from 'classnames';

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

export const Navbar = (): JSX.Element => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 10,
            },
        },
    };
    return (
        <motion.header
            className="sticky top-0 flex h-16 w-full items-center justify-center font-title text-xl opacity-95 shadow dark:bg-zinc-900 dark:text-white"
            transition={{ staggerChildren: 5 }}
            key="nav">
            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex lg:gap-10">
                <NavItem href="#home">home</NavItem>
                <NavItem href="#about">about</NavItem>
                <NavItem href="#projects">projects</NavItem>

                <NavItem
                    href="Omari Thompson-Edwards CV.pdf"
                    target="_blank"
                    className="text-gradient link">
                    cv
                </NavItem>
            </motion.ul>
        </motion.header>
    );
};