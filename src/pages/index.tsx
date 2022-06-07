import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Intro, ProjectMdxData, Projects } from 'components/sections';
import { getAllProjectFilePaths } from '../utils';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Navbar } from '../components/Navbar';
import React from 'react';

type HomePageProps = {
    projects: ProjectMdxData[];
};

const Home: NextPage<HomePageProps> = ({ projects }) => {
    return (
        <React.Fragment key="home">
            <Intro key="intro" />
            <Navbar key="nav" />
            <Projects key="projects" projects={projects} />
        </React.Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // MDX text - can be from a local file, database, anywhere

    // Get the file paths
    const paths = getAllProjectFilePaths();
    console.log(paths);

    const projects = await Promise.all(
        paths.map(async (p) => {
            //Load the file contents
            const source = fs.readFileSync(p);
            //Parse it into front matter and the actual content

            const { content, data } = matter(source);

            //console.log('content:', content, 'data:', data);

            //Gives us something to render in an MDXRemote component
            const mdxSource = await serialize(content, {
                // Optionally pass remark/rehype plugins
                mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [],
                },
                scope: data,
            });
            return {
                source: mdxSource,
                frontMatter: data,
            };
        })
    );
    //const paths = getAllProjectFiles();
    /*const source = fs.readFileSync(filePath);

    const { content, data } = matter(source);
    console.log('Data:', data);
    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });
    console.log('Source:', mdxSource);
    */
    const visibleProjects = projects.filter((p) => p.frontMatter.visible);
    return {
        props: {
            projects: visibleProjects,
        },
    };
};

export default Home;
