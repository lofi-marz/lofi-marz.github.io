import path from 'path';
import fs from 'fs';

export const PROJECTS_PATH = path.join(process.cwd(), '/content/projects/');

export function getAllProjectFilePaths() {
    return fs
        .readdirSync(PROJECTS_PATH)
        .map((p) => path.join(PROJECTS_PATH, p));
}
