import dynamic from 'next/dynamic';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function BackgroundSketch() {
    const DynamicSketch = React.memo(
        dynamic(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            () =>
                import('sketches').then((mod) => {
                    type SketchComponent = keyof typeof mod;
                    /*const sketches: SketchComponent[] = [
                    'PolygonMorphSketch',
                    'WebGlTestSketch',
                    'RotatingWavesSketch',
                    //'VisualiserSketch',
                ];

                const randomComponent =
                    sketches[Math.floor(Math.random() * sketches.length)];*/
                    const randomComponent = 'PolygonMorphSketch';
                    return mod[randomComponent];
                }),
            {
                ssr: false,
            }
        )
    );

    return <DynamicSketch />;
}
