#!/bin/sh
cat src/typescript-interfaces/node.d.ts | node src/typescript-converter.js > lib/node/node.generated.js
cat src/typescript-interfaces/node-0.8.8.d.ts | node src/typescript-converter.js > lib/node/node-0.8.8.generated.js
cat src/typescript-interfaces/core.d.ts | node src/typescript-converter.js > lib/core/core.generated.js
