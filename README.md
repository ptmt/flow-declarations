flow-declarations
=================

[![Build Status](https://travis-ci.org/unknownexception/flow-declarations.svg)](https://travis-ci.org/unknownexception/flow-declarations)

The tests and converters for https://github.com/facebook/flow declarations.


Try to convert Typescript declarations into Flow format:

```
npm run generate
```

Try to run tests:

```
npm run test
```

## Todo

- [ ] Mozilla tests for core and Browser API (core.js & dom.js declarations)
- [ ] IDL-compatible fully covered declarations for Browser API (core.js & dom.js declarations)
- [ ] Support for different platform and engines with flags (something like `npm run generate platform=node-0.12`)
