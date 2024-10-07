import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
    
    const pathToFile = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [pathToFile, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        console.log('The process ends with code: ' + code);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Parrot', 'cockatoo']);
