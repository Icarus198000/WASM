import init, { run_app } from './whisperWorker.js';
async function main() {
   await init('/whisperWorker.wasm');
   run_app();
}

main()
