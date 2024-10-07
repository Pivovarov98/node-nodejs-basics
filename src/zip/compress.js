import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const gZIP = zlib.createGzip();

    const streamToZIP = fs.createReadStream(pathToFile);
    const writebleStream = fs.createWriteStream(__dirname + '/files/archive.gz')
    streamToZIP.pipe(gZIP).pipe(writebleStream);

};

await compress();