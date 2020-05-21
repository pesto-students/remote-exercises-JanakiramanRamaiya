const addTwoStringNumbers = (bignumberString, numberString) => {
  let carry = 0;
  let digitOfBigNumber,
    digitOfNumber,
    temp,
    digitSum,
    sum = "";

  for (let i = 0; i < bignumberString.length; i++) {
    digitOfBigNumber = parseInt(
      bignumberString.charAt(bignumberString.length - i - 1)
    );
    digitOfNumber = parseInt(numberString.charAt(numberString.length - i - 1));
    digitOfNumber = digitOfNumber ? digitOfNumber : 0;
    temp = (carry + digitOfBigNumber + digitOfNumber).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;
    sum = i === bignumberString.length - 1 ? temp + sum : digitSum + sum;
  }
  return sum;
};
function addBigIntegers(stringOfNumbers = "") {
  const listOfNumberString = stringOfNumbers.split("\n");
  if (listOfNumberString.length === 1) return listOfNumberString[0];
  const sortedListOfNumberString = listOfNumberString.sort(
    (numberA, numberB) => numberB.length - numberA.length
  );
  let totalSum = sortedListOfNumberString[0];
  const reminingListOfNumberString = sortedListOfNumberString.slice(
    1,
    sortedListOfNumberString.length
  );

  reminingListOfNumberString.forEach((number) => {
    totalSum = addTwoStringNumbers(totalSum, number);
  });
  return totalSum;
}

export { addBigIntegers };
