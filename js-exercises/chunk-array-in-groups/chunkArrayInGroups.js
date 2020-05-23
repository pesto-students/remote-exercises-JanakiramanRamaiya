function chunkArrayInGroups(array, chunkSize) {
  let chunks = [],
    i = 0;
  while (i < array.length) {
    chunks.push(array.slice(i, (i += chunkSize)));
  }
  return chunks;
}

export { chunkArrayInGroups };
