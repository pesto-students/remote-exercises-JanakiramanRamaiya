function allSettled(promises) {
  return new Promise(async (resolve) => {
    const results = [];
    for (let promise of promises) {
      if (!(promise instanceof Promise)) {
        results.push({ status: "fulfilled", value: promise });
        continue;
      }
      await promise
        .then((value) => results.push({ status: "fulfilled", value: value }))
        .catch((err) => results.push({ status: "rejected", reason: err }));
    }
    resolve(results);
  });
}

export { allSettled };
