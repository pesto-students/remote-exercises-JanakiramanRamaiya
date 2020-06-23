/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  const element = permutationOptions[0];
  if (!Array.isArray(permutationOptions))
    throw new TypeError("permutationOptions should be an array");
  if (permutationOptions.length === 1) return [permutationOptions];
  const resultArray = [];
  const partialPermutation = permutateWithoutRepetitions(
    permutationOptions.slice(1)
  );
  for (let i = 0; i < partialPermutation.length; i++) {
    const permutation = partialPermutation[i];
    for (let j = 0; j <= permutation.length; j++) {
      resultArray.push(
        permutation.slice(0, j).concat([element], permutation.slice(j))
      );
    }
  }
  return resultArray;
}

export { permutateWithoutRepetitions };
