import init, { fib } from "rust-libs";

export const fibjs = (num) => num <= 2 ? 1 : fibjs(num - 1) + fibjs(num - 2);

export const fibrs = async (num) => {
    await init();
    return fib(num);
}

