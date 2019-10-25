const tl = require('@ungap/template-literal');

const fakeplate = require('../cjs');

console.assert(fakeplate('test') === fakeplate('test'), 'same object');

console.assert(tl(fakeplate('test')) === tl(fakeplate('test')), 'template-literal satisfied');
