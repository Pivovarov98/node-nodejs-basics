import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {

    const pathToDir = path.join(__dirname, 'files');

    if (!fs.existsSync(pathToDir)) {
        throw new Error('FS operation failed')
    } else {
        fs.readdir(pathToDir, (err, files) => {
            console.log(files)
        })
    }

};

await list();
