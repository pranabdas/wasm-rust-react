# React Application using Web-Assembly (Rust)

You must have node (and npm) installed.

### Initialize React project
```console
npx -y create vite@latest wasm-rust-react -- --template react-ts
```

### Install tools

Install rust related tools using the setup script:
```console
bash setup.sh
```

Create new rust lib:
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
```console
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

To update rust dependencies:

```console
cargo install cargo-update --features vendored-openssl
cargo install-update -a
```

### Resources

- https://rustwasm.github.io/docs/book/
