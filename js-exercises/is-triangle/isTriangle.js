function isTriangle() {
  const [a, b, c] = Array.from(arguments);
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return true;
}

export { isTriangle };
