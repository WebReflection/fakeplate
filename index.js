var fakeplate = (function (exports) {
  'use strict';

  var create = Object.create,
      defineProperty = Object.defineProperty,
      freeze = Object.freeze;
  var cache = create(null);

  var fake = function fake(str, value) {
    return cache[str] = freeze(defineProperty(value, 'raw', {
      value: value
    }));
  };

  var index = (function (str) {
    return cache[str] || fake(str, [str]);
  });

  exports = index;

  return exports;

}({}));
