# React Application using Web-Assembly (Rust)

You must have node (and npm) installed.

### Initialize React project
```console
npx -y create-react-app wasm-rust-react --template typescript
```

### Install tools

Install rust related tools using the setup script:
```console
bash setup.sh
```

Or create new rust lib:
```console
cargo new rust-libs --lib
cd rust-libs
cargo add wasm-bindgen
```

Change crate-type in `Cargo.toml` and add rust byproducts in `.gitignore`.
```rs
[lib]
crate-type = ["cdylib"]
```

Build the rust libs:
```console
wasm-pack build --target web
```

Install/add package to npm:
```
npm i ./rust-libs/pkg
```

Or add `"rust-libs": "file:rust-libs/pkg"` to `package.json` dependencies, and
run:
```console
npm i
```

Start development server:
```console
npm start
```

Running wasm in a web worker.
```
npm i @shopify/web-worker
```

Currently, the shopify lib might have some [issues](
https://github.com/Shopify/quilt/issues/2232), or my implementation is not
correct.

### Resources
- <https://neoquest.xyz/blog/react+rust+wasm+introduction>
- <https://rustwasm.github.io/docs/book/>
