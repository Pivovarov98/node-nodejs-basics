import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    
    const pathToWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToCorrectFile = path.join(__dirname, 'files', 'properFilename.md');

    if(!fs.existsSync(pathToWrongFile) || fs.existsSync(pathToCorrectFile)){
        throw new Error('FS operation failed');
    } else {
        fs.rename(pathToWrongFile, pathToCorrectFile, () => {});
    }

};

await rename();