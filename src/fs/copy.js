import { cp } from 'fs/promises';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {

    const pathToCopyFolder = path.join(__dirname, 'files');
    const pathToNewFolder = path.join(__dirname, 'files_copy');

    if(!fs.existsSync(pathToCopyFolder) || fs.existsSync(pathToNewFolder)){
        throw new Error('FS operation failed')
    } else {
        cp(pathToCopyFolder, pathToNewFolder, { recursive: true });
    }
};

await copy();
