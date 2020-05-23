function diffArray(arrayA = [], arrayB = []) {
  return arrayA
    .filter((element) => !arrayB.includes(element))
    .concat(arrayB.filter((element) => !arrayA.includes(element)));
}

export { diffArray };
