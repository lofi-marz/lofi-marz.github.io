import { WithChildrenProps } from '../types';
import { useState } from 'react';
import { motion } from 'framer-motion';

type IconLinkProps = {
    href: string;
} & WithChildrenProps;

export function IconLink({ href, children }: IconLinkProps) {
    return (
        <a
            key={href}
            href={href}
            className="rounded from-primary to-secondary p-2 text-2xl transition-all hover:bg-gradient-to-r">
            {children}
        </a>
    );
}

type AnimatedIconLinkProps = IconLinkProps & {
    index: number;
    selectedSocial: number;
    setSelectedSocial: () => void;
};

export function AnimatedIconLink({
    href,
    children,
    index,
    selectedSocial,
    setSelectedSocial,
}: AnimatedIconLinkProps) {
    return (
        <a
            onMouseEnter={setSelectedSocial}
            key={href}
            href={href}
            className="relative flex items-center justify-center rounded p-2 text-3xl transition-all">
            {index === selectedSocial && (
                <motion.div
                    className="absolute h-full w-full rounded bg-gradient-to-r from-primary to-secondary transition-all"
                    layoutId="about-bg"
                    initial={false}
                    animate
                    transition={{ type: 'tween', ease: 'linear' }}></motion.div>
            )}
            <div className="relative z-10">{children}</div>
        </a>
    );
}
