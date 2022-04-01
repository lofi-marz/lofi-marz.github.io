import React from 'react';

import WebGLTestSketch from '../sketches/webgl-test-sketch';
const Intro: React.FC = () => {

    return (
        <div className='container centered-flex intro'>

            <WebGLTestSketch></WebGLTestSketch>

        </div>
    );
};

export default Intro;