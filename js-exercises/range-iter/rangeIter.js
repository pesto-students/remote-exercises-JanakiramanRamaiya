function iterable(start, end) {
  const rangeObject = {
    start,
    end,
    next() {
      if (this.start <= this.end) {
        return {
          done: false,
          value: this.start++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };

  rangeObject[Symbol.iterator] = function () {
    return this;
  }.bind(rangeObject);

  return rangeObject;
}

function rangeIter(start, end) {
  if (!start || !end) throw new TypeError("undefined is not a number");
  if (typeof start !== "number")
    throw new TypeError(`${start} is not a number`);
  if (typeof end !== "number") throw new TypeError(`${end} is not a number`);
  const iterableObj = iterable(start, end);
  const range = [];
  for (const ele of iterableObj) {
    range.push(ele);
  }
  return range;
}

export { rangeIter };
