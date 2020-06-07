const sleep = (ms) => {
  const promise = new Promise((resolve) => setTimeout(resolve, ms));
  const innerFn = (value) => promise.then(() => value);

  innerFn.then = promise.then.bind(promise);
  innerFn.catch = promise.catch.bind(promise);

  return innerFn;
};
export { sleep };
