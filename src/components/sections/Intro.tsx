import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function Chevron() {
    return (
        <a className="absolute mt-32" href="#about">
            <FaChevronDown />
        </a>
    );
}

export function Intro() {
    //[calc(100vh-4rem)]
    return (
        <motion.section
            id="home"
            className="flex h-screen items-center justify-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ once: true }}>
            <div className="flex flex-col items-center justify-center font-title text-5xl font-bold mix-blend-difference invert dark:invert-0">
                hi, I&apos;m omari
                <Chevron />
            </div>
        </motion.section>
    );
}
