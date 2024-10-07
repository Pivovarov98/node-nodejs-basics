import { Worker } from 'worker_threads';
import path from 'path'
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {

    const pathToFile = path.join(__dirname, 'worker.js');
    const cores = os.cpus().length;
    let resultArr = [];

    for (let i = 0; i < cores; i++) {

        const worker = new Worker(pathToFile, { workerData: { num: i + 10 } });

        await new Promise(function (resolve, reject) {

            worker.on('message', (data) => {
                resultArr.push({
                    status: 'resolved',
                    data: data
                });
                resolve();
            });

            worker.on('error', (err) => {
                resultArr.push({
                    status: 'error',
                    data: null
                });
                reject();
            });
        });
    }

    console.log(resultArr)

};

await performCalculations();