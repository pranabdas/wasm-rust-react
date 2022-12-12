use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fib(num: i32) -> i32 {
    if num <= 0 {
        return 0;
    }

    if num == 1 {
        return 1;
    }

    fib(num - 1) + fib(num - 2)
}
