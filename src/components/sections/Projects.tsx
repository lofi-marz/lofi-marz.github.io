import { FaGithub, FaLink } from 'react-icons/fa';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { motion } from 'framer-motion';

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

function ProjectCard({ source, frontMatter }: ProjectCardProps) {
    const techList = frontMatter.tech
        .split(',')
        .sort((a, b) => a.localeCompare(b));
    console.log(frontMatter);
    return (
        <motion.div
            className="flex h-60 flex-col justify-between rounded bg-primary p-5 shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
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
            <h1 className="mb-10 self-start border-l-8 border-primary pl-5 font-title text-6xl font-bold">
                stuff I&apos;ve made
            </h1>
            <div className="grid w-full items-center justify-center gap-10 auto-fill-cols-64 lg:auto-fill-cols-96">
                {projects.map((p) => (
                    <ProjectCard key={p.frontMatter.title} {...p} />
                ))}
            </div>
        </motion.section>
    );
}
