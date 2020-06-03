function doExclusiveOR(ele1, ele2) {
  if (ele1 && ele2) return false;
  else if (ele1 || ele2) return true;
  return false;
}
function FindbooleanExpressionResult(operator, operandList) {
  const AND = "&";
  const OR = "|";
  const EXCLUSIVE_OR = "^";
  if (operator === AND) return operandList[0] && operandList[1];
  else if (operator === OR) return operandList[0] || operandList[1];
  else if (operator === EXCLUSIVE_OR)
    return doExclusiveOR(operandList[0], operandList[1]);
}
function booleanExpressionResultGenerator(
  booleanElementList,
  operatorsInExpression
) {
  let result = booleanElementList[0];

  if (!operatorsInExpression) return result;
  const booleanElementListReverse = [
    ...booleanElementList.slice(1, booleanElementList.length),
  ].reverse();
  for (let operator of operatorsInExpression) {
    result = FindbooleanExpressionResult(operator, [
      result,
      booleanElementListReverse.pop(),
    ]);
  }
  return result;
}
function booleanExpressionEvaluator(expressionString) {
  let arrayExpression = expressionString.split(" ");
  const booleanExpressionSupportObj = {
    true: true,
    false: false,
    "!true": false,
    "!false": true,
  };
  const OPERATORS = ["&", "|", "^"];
  let booleanElementList = [];
  let operatorsInExpression = [];

  for (let element of arrayExpression) {
    if (
      !Object.keys(booleanExpressionSupportObj).includes(element) &&
      !OPERATORS.includes(element)
    ) {
      return new Throw(
        "expression should contains parameters other than & or | or ^"
      );
    } else if (OPERATORS.includes(element)) operatorsInExpression.push(element);
    else booleanElementList.push(booleanExpressionSupportObj[element]);
  }
  // console.log(operatorsInExpression, booleanElementList);
  return booleanExpressionResultGenerator(
    booleanElementList,
    operatorsInExpression
  );
}

export { booleanExpressionEvaluator };
