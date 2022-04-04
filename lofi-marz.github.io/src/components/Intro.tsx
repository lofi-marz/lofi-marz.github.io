import React from 'react';


import Flex from './CenteredFlex';

import ScrollPrompt from './ScrollPrompt';
import Title from './Title';
import RandomBackgroundSketch from './RandomBackgroundSketch';

const Intro: React.FC = () => {

    return (
        <Flex className='intro'>
            <section id="main-box">
                <div>
                    <Title>{'hi, i\'m omari'}</Title>
                </div>
            </section>
            <ScrollPrompt/>
            <RandomBackgroundSketch/>

        </Flex>
    );
};

export default Intro;