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
cargo add wasm-bindgen
```

Move in to our `rust-libs` directory and build the rust libs:
```console
cd wasm-rust-libs
wasm-pack build --target web
```

Notice the `Cargo.toml` spec and add rust byproducts in `.gitignore`.
```rs
[lib]
crate-type = ["cdylib"]
```
Run:
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

### Resources
- <https://neoquest.xyz/blog/react+rust+wasm+introduction>
- <https://rustwasm.github.io/docs/book/>
