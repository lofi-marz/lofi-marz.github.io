import React, {lazy, useEffect, useState} from 'react';


const importSketch = (sketch: string): React.LazyExoticComponent<React.ComponentType<any>> => {
    return lazy(() => {
        return import(`../sketches/${sketch}-sketch`).catch(() => console.log('error loading sketch'));
    });
};

const sketches = ['webgl-test'];

const RandomBackgroundSketch: React.FC = () => {
    const [sketch, setSketch] = useState(<h1></h1>);

    useEffect(() => {
        async function loadSketch() {
            const randomSketch = sketches[Math.floor(Math.random() * sketches.length)];
            const sketchPromises = [randomSketch].map(async (sketch) => {
                const Sketch = await importSketch(sketch);
                return <Sketch key='s'>  </Sketch>;
            });
            Promise.all(sketchPromises).then((ss) =>  setSketch(ss[0]));

        }
        loadSketch();

    }, [sketch]);

    return (
        <React.Suspense fallback='Loading views...'>
            {sketch}
        </React.Suspense>
    );
};

export default RandomBackgroundSketch;
