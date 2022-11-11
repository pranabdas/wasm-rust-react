use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

#[wasm_bindgen]
pub fn add(input1: i32, input2: i32) -> i32 {
    input1 + input2
}

#[wasm_bindgen]
pub fn sub(input1: i32, input2: i32) -> i32 {
    input1 - input2
}

#[wasm_bindgen]
pub fn mult(input1: i32, input2: i32) -> i32 {
    input1 * input2
}

#[test]
fn add_test() {
    assert_eq!(15 + 12, add(15, 12));
}

#[test]
fn sub_test() {
    assert_eq!(15 - 12, sub(15, 12));
}

#[test]
fn mult_test() {
    assert_eq!(15 * 12, mult(15, 12));
}
