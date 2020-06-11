const fibonacciIter = {
  temp1: 1,
  temp2: 1,
  first: 1,
  next() {
    if (this.first === 1) {
      this.first++;
      return { value: 1, done: false };
    }
    let a = this.temp1 + this.temp2;

    [this.temp1, this.temp2] = [this.temp2, a];

    return { value: a, done: false };
  },
  [Symbol.iterator]() {
    this.temp1 = 1;
    this.temp2 = 1;
    this.first = 1;
    return this;
  },
};

export { fibonacciIter };
