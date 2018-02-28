# [broccoli](https://github.com/joliss/broccoli)-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/broccoli-strip-debug.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Install

```
$ npm install --save-dev broccoli-strip-debug
```


## Usage

```js
const StripDebug = require('broccoli-strip-debug');
tree = new StripDebug(tree);
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
