function sumFibs() {
  let num = Array.from(arguments)[0];

  let a = 1;
  let b = 1;
  let s = 0;
  while (a <= num) {
    if (a % 2 !== 0) s += a;
    a = [b, (b = b + a)][0];
  }
  return s;
}

export { sumFibs };
