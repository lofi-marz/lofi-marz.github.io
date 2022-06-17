import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

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
        const midX = (v1.x + v2.x) / 2;
        const midY = (v1.y + v2.y) / 2;
        const midZ = (v1.z + v2.z) / 2;
        return new Vector3(midX, midY, midZ);
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public normalize() {
        const length = this.length();
        const normalized = this.map((n) => n / length);
        this.x = normalized.x;
        this.y = normalized.y;
        this.z = normalized.z;
    }
}

function calcAngle(v: Vector3): number {
    let angle = 0;
    if (v.z > 0) {
        angle = Math.atan(v.x / v.z);
    } else if (v.z < 0 && v.x >= 0) {
        angle = Math.atan(v.x / v.z) + Math.PI;
    } else if (v.z < 0 && v.x < 0) {
        angle = Math.atan(v.x / v.z) - Math.PI;
    } else if (v.z == 0 && v.x > 0) {
        angle = Math.PI / 2;
    } else if (v.z == 0 && v.x < 0) {
        angle = -Math.PI / 2;
    }
    return Math.PI / 2 - angle;
}

function generateIcosahedronVertices(): Vector3[] {
    const phi = (1 + Math.sqrt(5)) / 2;
    //Generate the vertices
    const vertices: Vector3[] = [];

    vertices.push(new Vector3(-1, phi, 0));
    vertices.push(new Vector3(1, phi, 0));
    vertices.push(new Vector3(-1, -phi, 0));
    vertices.push(new Vector3(1, -phi, 0));

    vertices.push(new Vector3(0, -1, phi));
    vertices.push(new Vector3(0, 1, phi));
    vertices.push(new Vector3(0, -1, -phi));
    vertices.push(new Vector3(0, 1, -phi));

    vertices.push(new Vector3(phi, 0, -1));
    vertices.push(new Vector3(phi, 0, 1));
    vertices.push(new Vector3(-phi, 0, -1));
    vertices.push(new Vector3(-phi, 0, 1));
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

    for (let i = 0; i < vertices.length - 2; i += 3) {
        const point1 = vertices[i];
        const point2 = vertices[i + 1];
        const point3 = vertices[i + 2];
        const mid1 = Vector3.mid(point1, point2);
        const mid2 = Vector3.mid(point2, point3);
        const mid3 = Vector3.mid(point3, point1);

        const newPoints: Vector3[] = [
            point1,
            mid1,
            mid3,
            mid1,
            point2,
            mid2,
            mid3,
            mid2,
            point3,
            mid1,
            mid2,
            mid3,
        ];

        for (let j = 0; j < newPoints.length; j++) {
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
        if (
            !uniqueVertices.some(
                (v2) => v.x == v2.x && v.y == v2.y && v.z == v2.z
            )
        )
            uniqueVertices.push(new Vector3(v.x, v.y, v.z));
    });

    uniqueVertices = uniqueVertices.map((v) => {
        v.normalize();
        return v.map((n) => n * radius);
    });
    const layers = new Map<number, Vector3[]>();
    uniqueVertices.forEach((v) => {
        if (!layers.has(v.y)) layers.set(v.y, []);

        const layer = layers.get(v.y);
        if (!layer) return;

        layer.push(v);

        layers.set(v.y, layer);
    });
    const sortedVertices: Vector3[] = [];
    layers.forEach((l) => {
        sortedVertices.push(
            ...l.sort((a, b) => {
                const aTheta = calcAngle(a);
                const bTheta = calcAngle(b);
                return aTheta - bTheta;
            })
        );
    });

    return sortedVertices;
}

export function RotatingIcosphere(props: JSX.IntrinsicElements['mesh']) {
    const vertices = generateIcosphere(200, 3);

    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));

    useThree(({ camera }) => {
        camera.translateZ(125);
    });

    return (
        <mesh ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <ambientLight />
            {vertices.map(({ x, y, z }) => {
                /*const val = p5.map(
                    p5.sin(yOffset + elapsedTime),
                    -1,
                    1,
                    hue1,
                    hue2
                );
                //const index = p5.map(i, 0, vertices.length, 0,255);

                p5.fill(p5.color(val, 200, 223));*/
                return (
                    <mesh key={`${x}${y}${z}`} position={[x, y, z]}>
                        <sphereBufferGeometry args={[3, 3, 3]} />
                        <meshStandardMaterial color="#ffffff" />
                    </mesh>
                );
            })}
        </mesh>
    );
}
