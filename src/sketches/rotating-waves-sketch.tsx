import React from 'react';
import P5 from 'p5';
import Sketch from 'react-p5';
import { sketchConfig } from './config';
import { colors } from '../utils/theme';

/*
function clamp(min: number, val: number, max: number): number {

    //If val < min
    //Math.max returns min
    //Math.min(min, max) returns min
    //If val > max
    //Math.max returns val
    // Math.min val, max returns max

    return Math.min(Math.max(min, val), max);
}


function smoothMin(a: number, b: number, k: number): number {
    const h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);
    return (a * h) + b * (1-h) - k*h*(1.0-h);
}*/

/*
function smoothMax(a: number, b: number, k: number): number {
    return -smoothMin(-a, -b, k);
}*/

class Layer {
    radius: number;
    speed: number;

    constructor(radius: number, speed = 1) {
        this.radius = radius;
        this.speed = speed;
    }

    draw(p5: P5, elapsedTime: number) {
        const c = 9;
        const s = 0.5;
        const w = 10;
        const phase = ((this.speed * elapsedTime) / 2) % (2 * p5.PI);

        p5.beginShape();
        p5.strokeJoin(p5.ROUND);
        p5.strokeWeight(8);
        for (let theta = 0; theta < 2 * p5.TAU; theta += p5.TAU / 1000) {
            const offsetAngle = w * theta - w * s * phase;
            const val =
                Math.pow(Math.sin(theta / 2 + phase), c) *
                Math.sin(offsetAngle);

            //console.log({i, theta});
            const r = this.radius + 10 * val;
            const x = p5.cos(theta) * r;
            const y = p5.sin(theta) * r;
            const color = p5.lerpColor(
                p5.color(colors.primary),
                p5.color(colors.secondary),
                (Math.sin(offsetAngle / 2) + 1) / 2
            );
            p5.stroke(color);
            p5.vertex(x, y);
        }

        p5.endShape(p5.CLOSE);
    }
}

export const RotatingWavesSketch: React.FC = () => {
    let elapsedTime = 0;

    let layers: Layer[] = [];

    const setup = (p5: P5, canvasParentRef: Element) => {
        elapsedTime = 0;
        layers = [];
        //p5.createCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE).parent(canvasParentRef);
        p5.createCanvas(500, 500).parent(canvasParentRef);
        layers.push(new Layer(sketchConfig.radius, 1));
    };

    const draw = (p5: P5) => {
        elapsedTime += p5.deltaTime / 1000;
        const bg = p5.color(colors['dark'][900]);
        //bg.setAlpha(20);

        p5.background(bg);
        //console.log(bg);
        p5.translate(p5.width / 2, p5.height / 2);
        p5.noFill();
        p5.stroke(255, 200);
        p5.strokeWeight(16);
        //p5.fill(255,200);
        layers.forEach((l) => l.draw(p5, elapsedTime));

        p5.noStroke();
        //p5.circle(0,0, innerRadius * 2);
    };

    /*const onWindowResize = (p5: P5) => {
      p5.resizeCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE);
  };*/

    return <Sketch setup={setup} draw={draw} />;
};
