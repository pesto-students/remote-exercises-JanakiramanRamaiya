const shiftOneChar = (letter) => String.fromCharCode(letter.charCodeAt(0) + 1);

const alphabeticShift = (inputStr) => {
  if (typeof inputStr !== "string") {
    throw new TypeError("the input str should be string");
  }

  return inputStr.split("").map(shiftOneChar).join("");
};

export { alphabeticShift };
