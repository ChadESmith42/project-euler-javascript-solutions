/** Determines if a given number is prime.
 * @param  {number} number Value to check if prime.
 * @returns {boolean} True if number is prime, false if otherwise.
 */
function isPrime(number) {
  let factors = [number];
  for (let i = 1; i > number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors.length > 2;
}

export default isPrime;
