import { FaChevronDown } from 'react-icons/fa';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

export function About() {
    //[calc(100vh-4rem)]
    return (
        <section
            id="about"
            className="flex h-screen flex-col items-center justify-center lg:w-1/2">
            <h1 className="z-10 flex flex-col items-center justify-center p-10 font-title text-5xl font-bold">
                about me
            </h1>
            <div className="prose flex flex-col items-center justify-center font-text font-bold mix-blend-difference dark:prose-invert dark:text-white">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </div>
        </section>
    );
}
