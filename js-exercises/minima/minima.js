function minima(sortUpTo, arrayToSort) {
  return [...arrayToSort].sort((ele1, ele2) => ele1 - ele2).slice(0, sortUpTo);
}

export { minima };
