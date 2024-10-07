import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {

    const pathToFile = __dirname + '/files/fileToCalculateHashFor.txt';
    const hash = crypto.createHash('sha256')

    const readStreamData = fs.createReadStream(pathToFile);

    readStreamData.on('data', (data, err) => {
        console.log(data.toString())
        hash.update(data.toString())
        const digestHash = hash.digest('hex')
        console.log(digestHash)
    });

};

await calculateHash();