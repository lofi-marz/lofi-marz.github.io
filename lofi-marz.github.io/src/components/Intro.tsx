import React from 'react';

import WebGLTestSketch from '../sketches/webgl-test-sketch';
const Intro: React.FC = () => {

    return (
        <div className='container centered-flex intro'>

            <section id="main-box">
                <div>
                    <h1 id="name" className="title">hi, i&apos;m <span className="highlight">omari</span></h1>
                </div>
            </section>
            <WebGLTestSketch></WebGLTestSketch>

        </div>
    );
};

export default Intro;