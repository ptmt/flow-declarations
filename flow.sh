#!/bin/sh
#cat src/typescript/node.d.ts | node src/typescript-converter.js > lib/node/node.generated.js
cat src/typescript/node-0.8.8.d.ts | node src/typescript-converter.js > lib/node/node-0.8.8.generated.js
#cat src/typescript/core.d.ts | node src/typescript-converter.js > lib/core/core.generated.js
../flow/bin/flow check test/node --no-flowlib --lib lib --all
