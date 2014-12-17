#!/bin/sh
cat src/typescript/node.d.ts | node src/typescript-converter.js > lib/node/node.js
../flow/bin/flow check test/node --no-flowlib --lib lib --all
