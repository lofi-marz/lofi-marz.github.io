import React from 'react';
import Sketch from 'react-p5';
import P5 from 'p5';

const SCALE = 0.5;

class Metaball {
    x: number;
    y: number;
    r: number;

    startVx: number;
    startVy: number;

    vx: number;
    vy: number;

    constructor(startX: number, startY: number, radius: number, startVx: number, startVy: number) {
        this.x = startX;
        this.y = startY;
        this.r = radius;

        this.startVx = startVx;
        this.startVy = startVy;

        this.vx = startVx;
        this.vy = startVy;
    }


}

function dist(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function squaredDist(x1: number, y1: number, x2: number, y2: number) {
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}





const MetaballsSketch: React.FC = () => {

    let metaballs: Metaball[];
    //See annotations in JS for more information
    const setup = (p5: P5, canvasParentRef: Element) => {

        p5.createCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE).parent(canvasParentRef);
        p5.pixelDensity(1);
        metaballs = [];

        for (let i = 0; i < 20; i++) {
            const x = p5.random(p5.width);
            const y = p5.random(p5.height);
            const r = p5.random(50 * SCALE,150 * SCALE);
            const vx = p5.random(-10 * SCALE, 10 * SCALE);
            const vy = p5.random(-10 * SCALE, 10 * SCALE);
            metaballs.push(new Metaball(x,y, r, vx, vy));
        }

    };



    const draw = (p5: P5) => {

        p5.loadPixels();
        p5.background('black');

        let i = 0;

        //TODO: Make this more efficient
        for (let x = 0; x < p5.width; x++) {
            for (let y = 0; y < p5.height; y++) {
                let density = 0;
                i = 4 * (x + y * p5.width);
                metaballs.forEach((m) => {

                    //const d = dist(x,y, m.x, m.y);

                    density += m.r * m.r / squaredDist(x, y, m.x, m.y);

                    //if (Math.round(d) == m.r) density = 255;
                });
                //if (i % 100 == 0) console.log(density);
                density = density > 50 ? 255 :  0;

                p5.pixels[i] = density;
                p5.pixels[i+1] = density;
                p5.pixels[i+2] = density;
                p5.pixels[i+3] = 255;
            }
        }

        metaballs.forEach((m) => {
            m.x += m.vx;
            m.y += m.vy;

            if (m.x < 0)
            {
                m.vx = m.startVx;
            } else if (m.x > p5.width ) {
                m.vx = -m.startVx;
            }

            if (m.y < 0)
            {
                m.vy = m.startVy;
            } else if (m.y > p5.height) {
                m.vy = -m.startVy;
            }



        });

        p5.updatePixels();



    };



    const onWindowResize = (p5: P5) => {
        p5.resizeCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE);
    };



    return <Sketch setup={setup}  windowResized={onWindowResize} draw={draw} />;
};

export default MetaballsSketch;