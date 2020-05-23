const sumEvenArgs = (...args) => {
  return args
    .filter((element) => element % 2 === 0)
    .reduce((total, evenElement) => (total += evenElement), 0);
};

export { sumEvenArgs };
