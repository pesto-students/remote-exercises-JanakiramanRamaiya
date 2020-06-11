function rangeIter(start, end) {
  if (!start || !end) throw new TypeError("undefined is not a number");
  if (typeof start !== "number")
    throw new TypeError(`${start} is not a number`);
  if (typeof end !== "number") throw new TypeError(`${end} is not a number`);
  const rangeObj = {
    start,
    end,
    next() {
      if (this.start <= this.end) {
        return { value: this.start++, done: false };
      } else {
        this.start = start;
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return rangeObj;
}

export { rangeIter };
