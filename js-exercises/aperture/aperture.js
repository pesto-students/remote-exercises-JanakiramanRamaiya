function aperture(step, array) {
  let stepArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i + step <= array.length) {
      stepArray.push(array.slice(i, i + step));
    }
  }
  return stepArray;
}

export { aperture };
