const animalSort = (animals) => {
  const compareNames = (name1, name2) => {
    if (name1 > name2) return 1;
    return -1;
  };
  return [...animals].sort(
    (animalA, animalB) =>
      animalA.numberOfLegs - animalB.numberOfLegs ||
      compareNames(animalA.name, animalB.name)
  );
};

export { animalSort };
