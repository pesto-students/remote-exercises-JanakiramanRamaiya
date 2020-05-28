function findNoOfDeletion(str) {
  if (str.length === 1) return 0;
  let prevChar = str[0];
  let noOfDeletions = 0;
  for (let char of str.slice(1, str.length)) {
    if (char === prevChar) {
      noOfDeletions += 1;
    }
    prevChar = char;
  }

  return noOfDeletions;
}

function alternatingCharacters(arr) {
  return arr.map(findNoOfDeletion);
}

export { alternatingCharacters };
