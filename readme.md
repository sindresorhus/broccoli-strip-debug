# [broccoli](https://github.com/joliss/broccoli)-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/broccoli-strip-debug.png?branch=master)](https://travis-ci.org/sindresorhus/broccoli-strip-debug)

> Strip `console` and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Install

```
npm install --save broccoli-strip-debug
```


## Example

```js
var stripDebug = require('broccoli-strip-debug');
tree = stripDebug(tree);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
