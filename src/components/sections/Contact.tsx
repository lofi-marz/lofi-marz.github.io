import { motion } from 'framer-motion';
import { NavbarSpacer } from '../Navbar';
import { FaChevronRight } from 'react-icons/fa';

export function Contact() {
    return (
        <motion.footer className="flex h-screen flex-col gap-10 p-10">
            <NavbarSpacer></NavbarSpacer>
            <h1 className="mb-10 self-start border-l-8 border-primary pl-5 font-title text-6xl font-bold">
                contact me
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
                    className="flex items-center gap-2 rounded bg-gradient-to-r from-primary to-secondary px-5 py-2 text-2xl transition-all">
                    Say Hi! <FaChevronRight />
                </a>
            </div>
        </motion.footer>
    );
}
