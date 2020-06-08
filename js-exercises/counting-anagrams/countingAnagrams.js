const countingAnagrams = (inputStr) => {
  if (typeof inputStr !== "string") {
    throw new TypeError("the str should be string type");
  }
  const strList = inputStr.split(" ");
  const sortedStrList = strList.map((str) => str.split("").sort().join(""));
  const AnagramStr = sortedStrList.filter(
    (str, i) => str.length > 1 && sortedStrList.indexOf(str) !== i
  );
  return new Set(AnagramStr).size;
};

export { countingAnagrams };
