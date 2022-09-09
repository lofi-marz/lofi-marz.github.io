import { motion } from 'framer-motion';
import { FaAt, FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { WithChildrenProps } from '../../types';
import { IconLink } from '../IconLink';
import { NavbarSpacer } from '../Navbar';
import { fadeInLeftVariants } from '../../animations';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

const imageVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export function About() {
    //[calc(100vh-4rem)]
    return (
        <section
            className="flex h-screen w-full flex-col items-center justify-center lg:w-2/3"
            id="about">
            <NavbarSpacer></NavbarSpacer>
            <div className="flex h-screen w-full flex-col-reverse md:flex-row">
                <motion.div
                    className="flex flex-col items-center justify-center dark:bg-zinc-900 md:w-3/5 lg:h-screen"
                    initial="hidden"
                    whileInView="show"
                    transition={{
                        duration: 1,
                        staggerChildren: 0.5,
                    }}
                    viewport={{ once: true }}
                    variants={fadeInLeftVariants}>
                    <motion.h1
                        className="z-10 my-10 self-start border-l-8 border-primary pl-5 font-title text-5xl font-bold"
                        variants={fadeInLeftVariants}>
                        about me
                    </motion.h1>
                    <motion.div
                        className="text-content prose mix-blend-difference dark:prose-invert dark:text-white"
                        variants={fadeInLeftVariants}>
                        Hi, I&apos;m Omari! I&apos;m a Front-End Developer from
                        England, currently studying at the
                        <a
                            href="https://www.nottinghampost.com/news/nottingham-news/picture-shows-huge-gaggle-geese-3383819"
                            className="link">
                            {' '}
                            University of Nottingham
                        </a>
                        {'. '}I like making fun,
                        <a
                            className="link"
                            href="https://p5js-experiments-gamma.vercel.app/">
                            {' '}
                            creative{' '}
                        </a>
                        things with code.
                        <p className="mx-auto w-fit">
                            Feel free to contact me at any of these!
                            <span className="mx-auto flex w-min gap-10 px-10 py-5">
                                <IconLink href="https://github.com/lofi-marz/">
                                    <FaGithub />
                                </IconLink>
                                <IconLink href="https://www.linkedin.com/in/omari-thompson-edwards-b7307b195/">
                                    <FaLinkedin />
                                </IconLink>
                                <IconLink href="mailto:othompsonedwards@gmail.com">
                                    <FaAt />
                                </IconLink>
                            </span>
                        </p>
                    </motion.div>
                </motion.div>
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
            </div>
        </section>
    );
}
