import { FaChevronDown } from 'react-icons/fa';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

export function About() {
    //[calc(100vh-4rem)]
    return (
        <section id="home" className="flex h-screen items-center justify-start">
            <div className="z-10 flex flex-col items-center justify-center font-title text-5xl font-bold mix-blend-difference lg:w-1/2 ">
                about
            </div>
        </section>
    );
}
