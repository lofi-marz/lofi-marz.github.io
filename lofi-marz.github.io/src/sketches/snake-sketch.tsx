import React from 'react';
import Sketch from 'react-p5';
import P5 from 'p5';

enum Direction {
    None,
    Up,
    Right,
    Down,
    Left
}

const directions = [[0,0], [0, -1],[1,0],[0,1], [-1,0]];



class Snake {

    segments: [number, number][];
    currentDirection: Direction;
    newDirection: Direction;
    constructor(startX: number, startY: number) {
        this.segments = [[startX, startY]];
        this.currentDirection = Direction.Down;
        this.newDirection = Direction.Down;

        for (let i = 0; i < 2; i++) {
            this.segments.push([startX, startY - i]);
        }
    }


}



const SnakeSketch: React.FC = () => {

    const CELL_SIZE = 50;
    /*const SPACING = 5;
    const fruitPos: [number, number];*/
    const snake: Snake = new Snake(20, 10);
    const UPDATE_RATE = 500;
    let timeElapsed = 0;

    //See annotations in JS for more information



    const setup = (p5: P5, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        //const newStars: Star[] = [];

    };


    const draw = (p5: P5) => {
        //p5.background(0,0,0,127);
        p5.clear();
        timeElapsed += p5.deltaTime;

        const dir = directions[snake.currentDirection];
        //const progress = p5.map(timeElapsed, 0, UPDATE_RATE, 0, CELL_SIZE, true);

        if (timeElapsed >= UPDATE_RATE) {
            //snake.currentDirection = snake.newDirection;
            console.log(snake.segments[0]);
            timeElapsed -= UPDATE_RATE;

            //Get the tail off the top
            snake.segments.pop();

            //Add a new head on in the direction of the snake

            snake.segments.unshift([snake.segments[0][0] + dir[0], snake.segments[0][1] + dir[1]]);

            snake.segments.map((s) => {
                //TODO: There's a tick where the head of the snake is on the opposite side while the rest isn't so it is going to render incorrectly
                if (s[0] < 0) s[0] = p5.width/CELL_SIZE ;
            });
        }
        p5.noFill();
        p5.stroke('white');
        p5.strokeWeight(CELL_SIZE);

        p5.strokeJoin('miter');
        p5.beginShape();


        for (let i = 0; i < snake.segments.length; i++) {

            p5.vertex(snake.segments[i][0]*CELL_SIZE, snake.segments[i][1]*CELL_SIZE);
        }

        p5.endShape();
    };


    const onWindowResize = (p5: P5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

    };

    const onKeyPressed = (p5: P5) => {
        if (p5.keyCode >= 37 && p5.keyCode <= 40) snake.currentDirection = ((p5.keyCode - 34) % 4) + 1;

    };

    return <Sketch setup={setup}  windowResized={onWindowResize} draw={draw} keyPressed={onKeyPressed} />;
};

export default SnakeSketch;