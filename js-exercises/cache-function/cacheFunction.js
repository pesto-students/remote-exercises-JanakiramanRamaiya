function cacheFunction(callback) {
  const memorize = {};
  return (...arg) => {
    if (callback in memorize) {
      return memorize[callback];
    }
    memorize[callback] = callback(...arg);
    return callback(...arg);
  };
}

export { cacheFunction };
