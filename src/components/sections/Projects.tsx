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
};

type SerializedProjectMdx = MDXRemoteSerializeResult<Record<string, unknown>>;

type ProjectCardProps = ProjectMdxData;

export type ProjectsProps = {
    projects: ProjectMdxData[];
};

function ProjectCard({ source, frontMatter }: ProjectCardProps) {
    console.log(frontMatter);
    const techList = frontMatter.tech.split(',').sort();

    return (
        <motion.div
            className="flex h-52 flex-col justify-between rounded bg-primary  p-5 shadow-xl"
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
                            href="localhost:3005">
                            <FaGithub />
                        </a>
                        <a
                            className="text-2xl transition-all"
                            href="localhost:3005">
                            <FaLink />
                        </a>
                    </span>
                </div>

                <div className="prose prose-sm prose-invert py-3 text-white">
                    <MDXRemote {...source} />
                </div>
            </div>
            <div className="flex gap-1 text-sm">
                {techList.map((t) => (
                    <span
                        key={t}
                        className="rounded bg-white p-1 px-2 font-mono text-primary transition-all">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <motion.section
            id="projects"
            className="flex h-full min-h-screen w-screen  flex-col items-center justify-center p-10 dark:bg-zinc-900">
            <h1 className="self-start pb-10 font-title text-6xl font-bold">
                stuff I&apos;ve made
            </h1>
            <div className=" grid w-full items-center justify-center gap-10 auto-fill-cols-64 lg:auto-fill-cols-96">
                {projects.map((p) => (
                    <ProjectCard key={p.frontMatter.title} {...p} />
                ))}
                {projects.map((p) => (
                    <ProjectCard key={p.frontMatter.title} {...p} />
                ))}
            </div>
        </motion.section>
    );
}
