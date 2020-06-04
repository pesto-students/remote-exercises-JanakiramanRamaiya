const equal = (str1, str2) => !str1.localeCompare(str2);
const normalize = (str) => str.normalize("NFC");
function reverse(str) {
  if (!str.length) return "";
  let strCodePointList = [];
  let reversedStr = "";
  for (let element of normalize(str)) {
    strCodePointList.push(element.codePointAt(0));
  }
  for (let codepoint of strCodePointList.reverse()) {
    reversedStr += String.fromCodePoint(codepoint);
  }
  return reversedStr;
}

export { equal, reverse, normalize };
