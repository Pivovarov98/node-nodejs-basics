import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {

    const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    
    const readStream = fs.createReadStream(pathToArchive);
    const writeStream = fs.createWriteStream(pathToFile);
    const unZIP = zlib.createUnzip();

    readStream.pipe(unZIP).pipe(writeStream);
};

await decompress();