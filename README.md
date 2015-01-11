flow-declarations
=================

[![Build Status](https://travis-ci.org/unknownexception/flow-declarations.svg)](https://travis-ci.org/unknownexception/flow-declarations)

An attempt to comprehend how https://github.com/facebook/flow declarations could be complete and well-tested.


Try to convert Typescript declarations from (`src/typescript-interfaces`) into Flow format:

```
npm run generate
```

Try to run tests (requires Flow version which supports `--no-flowlib` option):

```
npm run test
```
## Tests

Node tests source is github.com/joyent/node

Mozilla tests source is official Mozilla repo


## Todo

- [ ] IDL-compatible fully covered declarations for Browser API (core.js & dom.js declarations)
- [ ] Mozilla tests for core and Browser API (core.js & dom.js declarations)
- [ ] Support for different platform and engines with flags (something like `npm run generate platform=node-0.12`)
