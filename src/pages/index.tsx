import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import {
    About,
    Contact,
    Intro,
    ProjectMdxData,
    Projects,
} from 'components/sections';
import { getAllProjectFilePaths } from '../utils';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import React, { useState } from 'react';
import { BackgroundSketch } from 'components/BackgroundSketch';
import {
    AnimateSharedLayout,
    motion,
    useTransform,
    useViewportScroll,
} from 'framer-motion';
import classNames from 'classnames';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Navbar } from 'components/Navbar';
import path from 'path';
import img from '/me.jpg';
type HomePageProps = {
    projects: ProjectMdxData[];
};

type AnimatedBackgroundSketchProps = {
    animate: boolean;
};

function AnimatedBackgroundSketch({ animate }: AnimatedBackgroundSketchProps) {
    /*const sectionCount = 3;

    const { scrollYProgress } = useViewportScroll();
    const x = useTransform(
        scrollYProgress,
        [0, sectionCount <= 2 ? 1 : 1 / sectionCount],
        ['0%', '25%']
    );*/

    return (
        <motion.section
            className={classNames(
                'absolute flex h-[calc(200vh+4rem)] w-screen items-start justify-center'
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            layout>
            <div className="absolute top-0 flex h-screen w-screen items-center justify-center p-10">
                <BackgroundSketch />
            </div>
        </motion.section>
    );
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
    const isDesktop = useMediaQuery('lg');
    const [contactVisible, setContactVisible] = useState(false);
    return (
        <motion.div
            className="flex flex-col items-center justify-center  bg-primary"
            layout>
            <AnimateSharedLayout>
                <motion.div
                    className="w-full origin-bottom bg-dark-900 pb-48"
                    initial={{ scale: 1 }}
                    animate={{ scale: contactVisible ? 0.8 : 1 }}>
                    <Intro />
                    {!contactVisible && <Navbar />}
                    <About />
                    <Projects projects={projects} />
                </motion.div>
                <Contact
                    onViewportEnter={() => {
                        console.log('Visible');
                        setContactVisible(true);
                    }}
                    onViewportLeave={() => setContactVisible(false)}
                />
            </AnimateSharedLayout>
        </motion.div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // MDX text - can be from a local file, database, anywhere

    // Get the file paths
    const paths = getAllProjectFilePaths();
    console.log(paths);
    //TODO: Maybe its time to switch to a headless CMS lol
    paths.forEach((p) => {
        const pathArray = p.split('/');
        const fileName = pathArray[pathArray.length - 1];
        fs.copyFileSync(
            path.join(p, 'desktop.png'),
            path.join(process.cwd(), 'public', `${fileName}-desktop.png`)
        );
    });
    const projects = await Promise.all(
        paths.map(async (p) => {
            const pathArray = p.split('/');
            const name = pathArray[pathArray.length - 1];
            //Load the file contents
            const source = fs.readFileSync(path.join(p, 'project.mdx'));
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
                name,
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
