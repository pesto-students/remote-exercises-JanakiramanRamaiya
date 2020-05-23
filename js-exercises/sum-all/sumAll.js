const sumAllNumbers = (min, max) => ((max - min + 1) * (min + max)) / 2;
function sumAll() {
  let [a, b] = Array.from(arguments)[0];
  if (a > b) [a, b] = [b, a];
  return sumAllNumbers(a, b);
}

export { sumAll };
