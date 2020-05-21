const limitFunctionCallCount = (callback, limitedCount) => {
  let count = 1;
  return (...arg) => {
    if (count > limitedCount) return null;
    count++;
    return callback(...arg);
  };
};

export { limitFunctionCallCount };
