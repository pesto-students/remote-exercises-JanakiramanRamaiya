const allPromises = (promises) => {
  let results = [];
  return new Promise(async (resolve) => {
    for (let promise of promises) {
      if (!(promise instanceof Promise)) {
        results.push(promise);
        continue;
      }
      await promise.then((res) => results.push(res));
    }
    resolve(results);
  });
};

export { allPromises };
