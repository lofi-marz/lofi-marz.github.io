import { BackgroundSketch } from 'components/BackgroundSketch';
import { FaChevronDown } from 'react-icons/fa';

function Chevron() {
    return <FaChevronDown className="absolute mt-20" />;
}

export function Intro() {
    return (
        <section className="flex h-screen items-center justify-center">
            <div className="absolute z-0 p-10 lg:w-1/2">
                <BackgroundSketch />
            </div>
            <div className="z-10 flex flex-col items-center justify-center font-title text-5xl mix-blend-difference">
                hi, I'm omari
                <Chevron />
            </div>
        </section>
    );
}
