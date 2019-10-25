# fakeplate

[![Build Status](https://travis-ci.com/WebReflection/fakeplate.svg?branch=master)](https://travis-ci.com/WebReflection/fakeplate) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/fakeplate/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/fakeplate?branch=master)

Convert a string into a unique template Array like object

```js
import fakeplate from 'fakeplate';
// or const fakeplate = require('fakeplate');

// always true
fakeplate(content) === fakeplate(content);

// grants unique template literal Array like objects
// so that software can be optimized for same literals
tag(fakeplate(content));
```
