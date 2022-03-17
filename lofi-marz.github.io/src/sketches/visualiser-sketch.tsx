import React from 'react';
import Sketch from 'react-p5';
import P5 from 'p5';


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
}


function smoothMax(a: number, b: number, k: number): number {
    return -smoothMin(-a, -b, k);
}*/

const VisualiserSketch: React.FC = () => {

    const innerRadius = 150;
    const outerRadius = 225;
    const slices = 1000;
    const roughness = 0.5;
    let elapsedTime = 0;
    const setup = (p5: P5, canvasParentRef: Element) => {

        //p5.createCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE).parent(canvasParentRef);
        p5.createCanvas(500, 500).parent(canvasParentRef);







    };

    const draw = (p5: P5) => {

        p5.clear();
        p5.translate(p5.width/2, p5.height/2);

        p5.stroke(255,200);
        p5.strokeWeight(2);
        //p5.fill(255,200);
        p5.beginShape();
        p5.strokeJoin(p5.ROUND);
        elapsedTime += p5.deltaTime / 1000;
        if (elapsedTime) console.log();
        //const mouseX = p5.mouseX - p5.width/2;
        //const mouseY = p5.mouseY - p5.height/2;

        for (let theta = 0; theta < p5.TAU; theta += p5.TAU/slices) {




            //console.log({i, theta});
            const phase = elapsedTime/2;

            //phase controls rotation speed
            //xoff and yoff give a noise value to a specific point
            //zoff changes that through time

            const xoff =  p5.map(p5.cos(theta + phase), -1, 1, 0, roughness); //The x component of the value
            const yoff =  p5.map(p5.sin(theta + phase), -1, 1, 0, roughness); //The y component of the value
            const zoff = elapsedTime * 1;

            const noise = p5.noise(xoff, yoff, zoff);


            const r = p5.map(noise, 0, 1, innerRadius,outerRadius);

            const x = p5.cos(theta) * r;
            const y = p5.sin(theta) * r;

            p5.vertex( x, y);
        }
        p5.endShape(p5.CLOSE);

        p5.fill('black');
        p5.noStroke();
        p5.circle(0,0, innerRadius * 2);




    };


    /*const onWindowResize = (p5: P5) => {
        p5.resizeCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE);
    };*/



    return <Sketch  setup={setup} draw={draw} />;
};

export default VisualiserSketch;

