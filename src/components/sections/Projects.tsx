import { FaLink } from 'react-icons/fa';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

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
    const techList = frontMatter.tech.split(',');

    return (
        <div className="flex h-48 flex-col justify-between bg-secondary p-5 shadow">
            <div>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold lowercase">
                        {frontMatter.title}
                    </h1>
                    <a
                        className="text-2xl transition-all"
                        href="localhost:3005">
                        <FaLink />
                    </a>
                </div>

                <div className="py-3">{frontMatter.description}</div>
            </div>
            <div className="flex gap-1 text-sm">
                {techList.map((t) => (
                    <span
                        key={t}
                        className="p-1 px-2 font-mono text-white transition-all hover:bg-white hover:text-secondary">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <section className="flex h-full min-h-screen w-screen flex-col items-center justify-center p-10 dark:bg-black">
            <h1 className="p-10 font-title text-6xl font-bold">
                stuff I've made
            </h1>
            <div className=" grid w-full items-center justify-center  gap-10 auto-fill-cols-64 lg:auto-fill-cols-96">
                {projects.map((p) => (
                    <ProjectCard key={p.frontMatter.title} {...p} />
                ))}
            </div>
        </section>
    );
}
