# fakeplate

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
