import init, { fib } from "rust-libs";

export const fibrs = async (num) => {
    await init();
    return fib(num);
}

onmessage = async (e) => {
    let t0 = performance.now();
    const result = await fibrs(e.data);
    const timeTaken = performance.now() - t0;
    postMessage([result, timeTaken]);
}
