function freqSort(arrayToSort) {
  let arrayElementFrequency = {};
  arrayToSort.forEach((element) => {
    element = element.normalize();

    if (arrayElementFrequency[element]) arrayElementFrequency[element] += 1;
    else arrayElementFrequency[element] = 1;
  });
  const arrayElementFrequencyEntries = Object.entries(arrayElementFrequency);
  const sortedEntries = arrayElementFrequencyEntries.sort(
    (eleA, eleB) => eleB[1] - eleA[1]
  );
  const result = sortedEntries.map((ele) => ele[0]);
  return result;
}

export { freqSort };
