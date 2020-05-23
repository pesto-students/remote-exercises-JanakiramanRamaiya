const EachElementCount = (elements) => {
  return elements.reduce((acc, element) => {
    acc[element] ? acc[element]++ : (acc[element] = 1);
    return acc;
  }, {});
};

function duplicateLetters(...args) {
  const ElementObject = EachElementCount(args[0].split(""));
  let ObjectValues = Object.values(ElementObject);
  const maxValue = Math.max(...ObjectValues);
  return maxValue > 1 ? maxValue : false;
}

export { duplicateLetters };
