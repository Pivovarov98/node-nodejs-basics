import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {

    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    if(fs.existsSync(pathToFile)){
        fs.unlink(pathToFile, () => {})
    } else {
        throw new Error('FS operation failed')
    }
};

await remove();