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

class Vector3 {

    x: number;
    y: number;
    z: number;
    
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    //Idk how to make this useful
    public map(f: (...args: any[]) => number): Vector3 {
        return new Vector3(f(this.x), f(this.y), f(this.z));
    }

    public static mid(v1: Vector3, v2: Vector3) {
        const midX = ( v1.x + v2.x )/2;
        const midY = ( v1.y + v2.y )/2;
        const midZ = ( v1.z + v2.z )/2;
        return new Vector3(midX, midY, midZ);
    }

    public length(): number {
        return Math.sqrt(
            this.x * this.x +
            this.y * this.y +
            this.z * this.z
        );
    }

    public normalize() {
        const length = this.length();
        const normalized = this.map((n) => n/length);
        this.x = normalized.x;
        this.y = normalized.y;
        this.z = normalized.z;
    }
}

function generateIcosahedronVertices(): Vector3[] {
    
    const phi = (1 + Math.sqrt(5)) / 2;
    //Generate the vertices
    const vertices: Vector3[] = [];

    vertices.push(new Vector3(-1,  phi,  0));
    vertices.push(new Vector3( 1,  phi,  0));
    vertices.push(new Vector3(-1, -phi,  0));
    vertices.push(new Vector3( 1, -phi,  0));

    vertices.push(new Vector3( 0, -1,  phi));
    vertices.push(new Vector3( 0,  1,  phi));
    vertices.push(new Vector3( 0, -1, -phi));
    vertices.push(new Vector3( 0,  1, -phi));

    vertices.push(new Vector3( phi,  0, -1));
    vertices.push(new Vector3( phi,  0,  1));
    vertices.push(new Vector3(-phi,  0, -1));
    vertices.push(new Vector3(-phi,  0,  1));
    vertices.push(new Vector3(0, 1, 0));
    vertices.push(new Vector3(1, 0, 0));
    vertices.push(new Vector3(0, 0, 1));

    // create 20 triangles of the icosahedron
    const faces: [number, number, number][] = [];

    // 5 faces around point 0
    faces.push([0, 11, 5]);
    faces.push([0, 5, 1]);
    faces.push([0, 1, 7]);
    faces.push([0, 7, 10]);
    faces.push([0, 10, 11]);

    // 5 adjacent faces
    faces.push([1, 5, 9]);
    faces.push([5, 11, 4]);
    faces.push([11, 10, 2]);
    faces.push([10, 7, 6]);
    faces.push([7, 1, 8]);

    // 5 faces around point 3
    faces.push([3, 9, 4]);
    faces.push([3, 4, 2]);
    faces.push([3, 2, 6]);
    faces.push([3, 6, 8]);
    faces.push([3, 8, 9]);

    // 5 adjacent faces
    faces.push([4, 9, 5]);
    faces.push([2, 4, 11]);
    faces.push([6, 2, 10]);
    faces.push([8, 6, 7]);
    faces.push([9, 8, 1]);

    const realVertexList: Vector3[] = [];
    faces.forEach((f) => {
        realVertexList.push(vertices[f[2]]);
        realVertexList.push(vertices[f[1]]);
        realVertexList.push(vertices[f[0]]);
    });
    return realVertexList;
}

function splitTriangles(vertices: Vector3[]): Vector3[] {

    const newVertices = [];

    for (let i = 0; i < vertices.length - 2; i+=3)
    {
        const point1 = vertices[i];
        const point2 = vertices[i+1];
        const point3 = vertices[i+2];

        const mid1 = Vector3.mid(point1, point2);
        const mid2 = Vector3.mid(point2, point3);
        const mid3 = Vector3.mid(point3, point1);

        const newPoints: Vector3[] = [
            point1, mid1, mid3,
            mid1, point2, mid2,
            mid3, mid2, point3,
            mid1, mid2, mid3
        ];

        for (let j = 0; j < newPoints.length; j++)
        {

            newVertices.push(newPoints[j]);
        }
    }


    return newVertices;
}


function generateIcosphere(radius: number, divisions = 3): Vector3[] {
    let vertices = generateIcosahedronVertices();
    let uniqueVertices: Vector3[] = [];

    for (let i = 0; i < divisions; i++) {
        vertices = splitTriangles(vertices);
    }



    vertices.forEach((v) => {
        if (!uniqueVertices.includes(v)) uniqueVertices.push(v);}
    );

    uniqueVertices = uniqueVertices.sort((a, b) => {
        return (a.y - b.y);
    });
    uniqueVertices.forEach((v) => {
        v.normalize();
        v.x *= radius;
        v.y *= radius;
        v.z *= radius;
    });

    console.log(uniqueVertices[0]);
    console.log(uniqueVertices[uniqueVertices.length - 1]);
    return uniqueVertices;
}

const WebGLTestSketch: React.FC = () => {

    const rotationSpeed = Math.PI/8;
    const vertices = generateIcosphere(200, 3);
    let elapsedTime = 0;
    const setup = (p5: P5, canvasParentRef: Element) => {

        //p5.createCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE).parent(canvasParentRef);
        p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef);
        p5.orbitControl();
        p5.colorMode(p5.HSB, 255);
        console.log(vertices);

    };

    const draw = (p5: P5) => {
        elapsedTime += p5.deltaTime/1000;
        p5.clear();
        //p5.translate(p5.width/2, p5.height/2, 0);
        p5.fill('white');
        p5.noStroke();

        /*
        const locX = p5.mouseX - p5.height / 2;
        const locY = p5.mouseY - p5.width / 2;
        p5.colorMode(p5.RGB);
        p5.ambientLight(255, 255, 255);
        p5.pointLight(255, 255, 255, locX, locY, 100);
        p5.colorMode(p5.HSB);*/
        //p5.rotateX(rotationSpeed * p5.millis()/1000);
        p5.rotateX(p5.sin(elapsedTime/10));
        p5.rotateZ(p5.cos(elapsedTime/10));
        p5.rotateY(rotationSpeed * p5.millis()/1000);

        //p5.rotateZ(Math.PI/4);

        for (let i = 0; i < vertices.length; i++) {
            const v = vertices[i];
            p5.push();
            //const val = p5.map(v.y * (Math.pow(p5.sin(p5.millis()/1000), 3)), -50, 50, 0, 255);
            //const val = p5.map(p5.sin(v.y/10 + p5.millis()/1000), -1, 1, 200, 255);
            //const mouseAngle = p5.map(p5.mouseX * p5.mouseY, 0, p5.width * p5.height, 0, 205, true);
            const yOffset = p5.map(v.y, -100, 100, 0, Math.PI);
            const val = p5.map( p5.sin(yOffset + elapsedTime), -1, 1, 200, 255);
            p5.fill(p5.color(val, 200, 223));

            p5.translate(v.x, v.y, v.z);
            //p5.box(2);
            p5.sphere(2);
            p5.pop();

        }



        






    };


    /*const onWindowResize = (p5: P5) => {
        p5.resizeCanvas(p5.windowWidth * SCALE, p5.windowHeight * SCALE);
    };*/



    return <Sketch  setup={setup} draw={draw} />;
};

export default WebGLTestSketch;

