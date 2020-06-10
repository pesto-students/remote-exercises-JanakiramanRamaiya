const isNumber = (value) => typeof value !== "symbol" && !isNaN(value);

function negativeIndex(array) {
  if (Array.isArray(array) === false) {
    throw new TypeError("Only arrays are supported");
  }
  const handler = {
    get(target, prop) {
      let index = prop;
      if (isNumber(index) && index < 0) {
        index = Number(index);
        return Reflect.get(target, index + target.length);
      }
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      let index = prop;
      if (isNumber(index) && index < 0) {
        index = Number(index);
        index = index + target.length;
      }
      return Reflect.set(target, index, value);
    },
  };

  return new Proxy(array, handler);
}
export { negativeIndex };
