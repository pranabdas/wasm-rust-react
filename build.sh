#!/bin/bash
sudo apt update
sudo apt install -y curl
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | bash
cargo install cargo-generate
cd rust-libs
wasm-pack build --target web
cd ..
npm i
npm run build
