import { FaAt, FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { WithChildrenProps } from '../../types';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

type IconLinkProps = {
    href: string;
} & WithChildrenProps;

function IconLink({ href, children }: IconLinkProps) {
    return (
        <a
            key={href}
            href={href}
            className="rounded p-2 text-3xl transition-all hover:bg-primary">
            {children}
        </a>
    );
}

export function About() {
    //[calc(100vh-4rem)]
    return (
        <section
            id="about"
            className="flex h-screen flex-col items-center justify-center dark:bg-zinc-900 lg:w-1/2">
            <h1 className="z-10 my-10 self-start border-l-8 border-primary pl-5 font-title text-5xl font-bold">
                about me
            </h1>
            <div className="text-content prose mix-blend-difference dark:prose-invert dark:text-white">
                Hi, I&apos;m Omari! I&apos;m a Front-End Developer from England,
                currently studying at the{' '}
                <a
                    href="https://www.nottinghampost.com/news/nottingham-news/picture-shows-huge-gaggle-geese-3383819"
                    className="link">
                    University of Nottingham
                </a>
                {'. '}I like making fun,{' '}
                <a
                    className="link"
                    href="https://p5js-experiments-gamma.vercel.app/">
                    creative
                </a>{' '}
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
            </div>
        </section>
    );
}
