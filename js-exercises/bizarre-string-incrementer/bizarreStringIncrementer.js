// Start your implementation here
export const bizarreStringIncrementer = (string) => {
  const strNumberMatch = string.match(/\d+$/);

  if (!strNumberMatch) return `${string}1`;
  const strNumber = strNumberMatch[0];
  let numberWithIncrement = parseInt(strNumber) + 1;
  let modifiedStrNumber = numberWithIncrement.toString();
  let modifiedStrNumberWithLeadZero = modifiedStrNumber.padStart(
    strNumber.length,
    "0"
  );
  //   console.log(modifiedStrNumberWithLeadZero, strNumber);
  //   console.log(modifiedStrNumberWithLeadZero);
  return string.replace(strNumber, modifiedStrNumberWithLeadZero);
};
