function longestWordInString(inputString = "") {
  if (!inputString.length) return "";
  const LETTER = /^[A-Za-z]+$/;
  let longestWord = "";
  let maxLength = 0;
  const elementsInString = inputString.split(" ");
  const uniqueElements = [...new Set(elementsInString)];
  const onlyWords = uniqueElements.filter((element) => element.match(LETTER));
  onlyWords.forEach((word) => {
    let wordLength = word.length;
    if (wordLength > maxLength) {
      longestWord = word;
      maxLength = wordLength;
    }
  });
  return longestWord;
}

export { longestWordInString };
