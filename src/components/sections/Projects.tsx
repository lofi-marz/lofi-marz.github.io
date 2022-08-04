import { FaGithub, FaLink } from 'react-icons/fa';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { motion } from 'framer-motion';
import { NavbarSpacer } from '../Navbar';
import Image from 'next/image';
import { WithChildrenProps } from '../../types';

export type ProjectMdxData = {
    source: SerializedProjectMdx;
    frontMatter: ProjectFrontmatter;
};

type ProjectFrontmatter = {
    title: string;
    description: string;
    tech: string;
    link: string;
    github: string;
};

type SerializedProjectMdx = MDXRemoteSerializeResult<Record<string, unknown>>;

type ProjectCardProps = ProjectMdxData;

export type ProjectsProps = {
    projects: ProjectMdxData[];
};

function DesktopFrame({ children }: WithChildrenProps) {
    return (
        <div className="h-fit w-1/2 overflow-clip rounded-lg shadow">
            <div className="flex h-5 items-center justify-start gap-1 bg-gradient-to-r from-primary to-secondary px-4 saturate-50">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            {children}
        </div>
    );
}

function ProjectCard({ source, frontMatter }: ProjectCardProps) {
    const techList = frontMatter.tech
        .split(',')
        .sort((a, b) => a.localeCompare(b));
    //console.log(frontMatter);
    return (
        <motion.div
            className="flex h-60 w-full flex-col justify-between rounded p-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <DesktopFrame>
                <img
                    src="/portfolio-desktop.png"
                    className="aspect-[16/9] w-full "
                />
            </DesktopFrame>
        </motion.div>
    );
    return (
        <motion.div
            className="flex h-60 w-full flex-col justify-between rounded p-5 shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <div className="h-96 w-48">
                <Image src="/portfolio-desktop.png" layout="fill" />
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold lowercase">
                        {frontMatter.title}
                    </h1>
                    <span className="flex gap-2">
                        <a
                            className="text-2xl transition-all"
                            href={frontMatter.github}>
                            <FaGithub />
                        </a>
                        <a
                            className="text-2xl transition-all"
                            href={frontMatter.link}>
                            <FaLink />
                        </a>
                    </span>
                </div>

                <div className="prose prose-sm prose-invert py-3 text-white">
                    <MDXRemote {...source} />
                </div>
            </div>
            <ul className="flex w-full flex-wrap gap-1 text-sm">
                {techList.map((t) => (
                    <li
                        key={t}
                        className="rounded bg-white p-1 px-2 font-mono text-primary transition-all">
                        {t}
                    </li>
                ))}
            </ul>
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
            <div className="flex w-full flex-col items-center justify-center gap-10">
                {projects.map((p) => (
                    <ProjectCard key={p.frontMatter.title} {...p} />
                ))}
            </div>
        </motion.section>
    );
}
