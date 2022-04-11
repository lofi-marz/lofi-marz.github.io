import React from 'react';

import RandomBackgroundSketch from './RandomBackgroundSketch';

import { CenteredPageContainer } from './PageContainer';
import Title from './Title';
import styled from 'styled-components';

const Intro: React.FC = () => {

    return (
        <Wrapper>
            <Title>{'hi, i\'m omari'}</Title>
            <RandomBackgroundSketch/>
        </Wrapper>
    );
};

// Without this, the section has no specific positioning
// This means the p5 sketch positions relative to the page, which isn't scrolling
const Wrapper = styled(CenteredPageContainer)`
  position: relative;
`;

export default Intro;