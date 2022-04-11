import React from 'react';

import WebGLTestSketch from '../sketches/webgl-test-sketch';



const RandomBackgroundSketch: React.FC = () => {
    /*const [sketch, setSketch] = useState(<WebGLTestSketch/>);
    const sketches = [
        // eslint-disable-next-line react/jsx-key
        <WebGLTestSketch/>,
        // eslint-disable-next-line react/jsx-key
        <PolygonMorphSketch/>
    ];
    setSketch(sketches[Math.floor(Math.random() * sketches.length)]);*/
    return (
        <WebGLTestSketch/>
    );
};

export default RandomBackgroundSketch;
