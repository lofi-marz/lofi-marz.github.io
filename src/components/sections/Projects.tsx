import { FaChevronDown, FaChevronUp, FaGithub, FaLink } from 'react-icons/fa';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { NavbarSpacer } from '../Navbar';
import Image from 'next/image';
import { WithChildrenProps } from '../../types';
import classNames from 'classnames/bind';
import { useState } from 'react';

export type ProjectMdxData = {
    source: SerializedProjectMdx;
    frontMatter: ProjectFrontmatter;
    name: string;
};

type ProjectFrontmatter = {
    title: string;
    description: string;
    tech: string;
    link: string;
    github: string;
};

type SerializedProjectMdx = MDXRemoteSerializeResult<Record<string, unknown>>;

type ProjectCardProps = ProjectMdxData & { index: number };

export type ProjectsProps = {
    projects: ProjectMdxData[];
};

function DesktopFrame({
    children,
    className,
}: WithChildrenProps & { className?: string }) {
    return (
        <div
            className={classNames(
                'overflow-clip rounded-lg bg-clip-border shadow',
                className
            )}>
            <div className="flex h-5 items-center justify-start gap-1 bg-gradient-to-r from-primary to-secondary px-4 saturate-50">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            {children}
        </div>
    );
}

function ProjectDescription({
    description,
    children,
}: { description: string } & WithChildrenProps) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            className="prose prose-sm prose-invert relative rounded text-white md:w-[120%] md:bg-dark-800 md:p-5">
            <AnimatePresence>
                {open ? (
                    <motion.div
                        key="content"
                        className="flex w-full flex-col items-center justify-center text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            default: { ease: 'linear' },
                            duration: 1,
                        }}>
                        {children}
                        <button
                            onClick={() => setOpen((oldValue) => !oldValue)}>
                            <FaChevronUp />
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="description"
                        className="flex w-full flex-row items-center justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            default: { ease: 'linear' },
                            duration: 1,
                        }}>
                        <p>{description}</p>
                        <button
                            onClick={() => setOpen((oldValue) => !oldValue)}>
                            <FaChevronDown />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function ProjectCard({ source, frontMatter, name, index }: ProjectCardProps) {
    const techList = frontMatter.tech
        .split(',')
        .sort((a, b) => a.localeCompare(b));
    //console.log(frontMatter);
    //TODO: Get nth-childworking
    const rightAligned = index % 2 == 1;
    return (
        <motion.div
            className={classNames(
                'flex w-full flex-col justify-between rounded bg-dark-800 bg-clip-padding p-5 shadow md:flex-row md:bg-transparent md:p-0 md:shadow-none',
                {
                    'md:flex-row-reverse': rightAligned,
                }
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            layout>
            <AnimateSharedLayout>
                <motion.div
                    className="flex items-center justify-center md:w-1/2"
                    layout>
                    <DesktopFrame className="md:w-full">
                        <img
                            src={`/${name}-desktop.png`}
                            className="aspect-[16/9] w-full"
                            alt={`Preview screenshot for ${frontMatter.title}`}
                        />
                    </DesktopFrame>
                </motion.div>

                <motion.div
                    layout
                    className={classNames(
                        'relative flex flex-col justify-center gap-4 overflow-visible pt-4 md:w-1/2',
                        {
                            'md:items-end': !rightAligned,
                        }
                    )}>
                    <h1
                        className={classNames('text-2xl font-bold lowercase', {
                            'md:text-right': !rightAligned,
                        })}>
                        {frontMatter.title}
                    </h1>

                    <ProjectDescription description={frontMatter.description}>
                        <MDXRemote {...source} />
                    </ProjectDescription>
                    <ul className="flex flex-wrap gap-4 text-sm opacity-90 md:px-5">
                        {techList.map((t) => (
                            <li
                                key={t}
                                className="rounded font-mono text-white saturate-50 transition-all">
                                {t}
                            </li>
                        ))}
                    </ul>
                    <span className="mx-auto flex gap-4 px-5 text-xl md:mx-0">
                        <a className="transition-all" href={frontMatter.github}>
                            <FaGithub />
                        </a>
                        <a className="transition-all" href={frontMatter.link}>
                            <FaLink />
                        </a>
                    </span>
                </motion.div>
            </AnimateSharedLayout>
        </motion.div>
    );
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <motion.section
            id="projects"
            key="projects"
            className="z-10 flex h-full min-h-screen w-full flex-col items-center justify-center p-10 dark:bg-zinc-900">
            <NavbarSpacer></NavbarSpacer>
            <h1 className="mb-10 self-start border-l-8 border-primary pl-5 font-title text-6xl font-bold">
                stuff I&apos;ve made
            </h1>
            <div className="alternate-projects flex w-full flex-col items-center justify-center gap-10">
                {projects.map((p, i) => (
                    <ProjectCard key={p.frontMatter.title} {...p} index={i} />
                ))}
            </div>
        </motion.section>
    );
}
