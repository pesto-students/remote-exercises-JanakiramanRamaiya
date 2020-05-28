// your implementation
const map = (obj, callback) =>
  Object.fromEntries(Object.entries(obj).map(callback));

const filter = (obj, callback) =>
  Object.fromEntries(Object.entries(obj).filter(callback));

const invert = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([a, b]) => [b, a]));

const merge = (...args) => Object.assign({}, ...args);

const all = (array, callback) => array.every(callback);
const some = (array, callback) => array.some(callback);
export { map, filter, invert, merge, all, some };
