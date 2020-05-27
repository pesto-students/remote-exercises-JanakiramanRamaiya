function balancedBraces(expr) {
  let brackets = "{}()[]";
  let openbrackets = "{[(";
  let stack = [];
  for (let element of expr) {
    if (brackets.includes(element)) {
      if (openbrackets.includes(element)) {
        stack.push(element);
      } else {
        switch (element) {
          case ")":
            if (stack.pop() !== "(") return false;

            break;
          case "]":
            if (stack.pop() !== "[") return false;
            break;
          case "}":
            if (stack.pop() !== "{") return false;
            break;
        }
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
}

export { balancedBraces };
