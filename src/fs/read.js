import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {

    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    if(!fs.existsSync(pathToFile)){
        throw new Error('FS operation failed')
    } else {
        fs.readFile(pathToFile, 'utf-8', (err, data) => {
            console.log(data)
        })
    }
};

await read();