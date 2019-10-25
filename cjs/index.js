'use strict';
const {create, defineProperty, freeze} = Object;

const cache = create(null);

const fake = (str, value) => (
  cache[str] = freeze(defineProperty(value, 'raw', {value}))
);

module.exports = str => cache[str] || fake(str, [str]);
