function flipArgs(func) {
  return function (...arg) {
    return func(...Array.from(arg).reverse());
  };
}
export default flipArgs;
