import { BackgroundSketch } from 'components/BackgroundSketch';
import { FaChevronDown } from 'react-icons/fa';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

export function Intro() {
    return (
        <section
            id="home"
            className="flex h-[calc(100vh-4rem)] items-center justify-center">
            <div className="absolute z-0 p-10 lg:w-1/2">
                <BackgroundSketch />
            </div>
            <div className="z-10 flex flex-col items-center justify-center font-title text-5xl font-bold mix-blend-difference">
                hi, I&apos;m omari
                <Chevron />
            </div>
        </section>
    );
}
