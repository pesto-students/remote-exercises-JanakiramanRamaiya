function curry(targetFn) {
  let noOfArguments = targetFn.length;
  return function fn() {
    return arguments.length < noOfArguments
      ? fn.bind(null, ...arguments)
      : targetFn.call(null, ...arguments);
  };
}

export { curry };
