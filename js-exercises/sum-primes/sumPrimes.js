function isPrime(val) {
  for (var i = 2; i < val; i++) {
    if (val % i === 0) return false;
  }
  return true;
}

function sumPrimes() {
  let num = Array.from(arguments)[0];
  var answer = 0;

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) answer += i;
  }
  return answer;
}

export { sumPrimes };
