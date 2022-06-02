import type { NextPage } from 'next';
import { Intro, Projects } from 'components/sections';

const Home: NextPage = () => {
    return (
        <>
            <Intro />
            <Projects />
        </>
    );
};

export default Home;
