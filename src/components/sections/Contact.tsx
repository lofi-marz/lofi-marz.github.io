import { AnimatePresence, motion } from 'framer-motion';
import { NavbarSpacer } from '../Navbar';
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

type ContactProps = {
    onViewportEnter: () => void;
    onViewportLeave: () => void;
};
export function Contact({ onViewportEnter, onViewportLeave }: ContactProps) {
    return (
        <motion.footer
            className="flex flex-col gap-10 px-10 py-20"
            onViewportEnter={onViewportEnter}
            onViewportLeave={onViewportLeave}>
            <h1 className="mb-10 self-start border-l-8 border-dark-800 pl-5 font-title text-6xl font-bold">
                contact <br /> me
            </h1>
            <div className="mx-auto flex flex-col items-center justify-center gap-5 md:w-1/2">
                <p className="text-center font-text text-xl">
                    I&apos;m currently looking for web developer roles, so my
                    inbox is always open. <b />
                    Whether you have a question, an offer or just want to say
                    hi, send me a message and I will get back to you!
                </p>

                <a
                    href="mailto:othompsonedwards@gmail.com"
                    className="flex items-center gap-2 rounded bg-dark-800 px-5 py-2 text-2xl shadow transition-all hover:-translate-y-1 active:brightness-50 ">
                    Say Hi!
                    <FaChevronRight />
                </a>
            </div>
        </motion.footer>
    );
}
