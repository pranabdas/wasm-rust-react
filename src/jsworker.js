export const fibjs = (num) => num <= 2 ? 1 : fibjs(num - 1) + fibjs(num - 2);

onmessage = async (e) => {
    let t0 = performance.now();
    const result = await fibjs(e.data);
    const timeTaken = performance.now() - t0;
    postMessage([result, timeTaken]);
}
