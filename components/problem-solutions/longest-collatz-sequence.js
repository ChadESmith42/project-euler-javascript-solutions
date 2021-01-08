import findLongestArray from '../utilities/compare-array-length';
import findLongestArray from '../utilities/compare-array-length';
import isEven from '../utilities/is-even';

/** Finds the longest Collatz Sequence for all numbers below the provided value.
 * @param  {number} Upper limit of search for Collatz Sequences.
 * @returns {array} Returns an array of all numbers in the sequence. The first number is the solution.
 */
function longestCollatzSequence(number) {
  let a = [1];
  let b = [2, 1];
  // console.log(compareCollatzSequence(a, b));
  for (let i = 3; i < number; i++) {
    a = getCollatzSequence(i);
    // console.log(`resule of get sequence ${a}`);
    b = findLongestArray(a, b);
  }
  return b;
}

// Find the full Collatz sequence using argument `number`;
function getCollatzSequence(number) {
  let sequence = [number];
  do {
    // console.log(isEven(number));
    if (isEven(number)) {
      number /= 2;
      // console.log(`number is even result ${number}`);
    } else {
      number = number * 3 + 1;
      // console.log(`number is odd result ${number}`)
    }
    sequence.push(number);
  } while (sequence[sequence.length - 1] !== 1);
  return sequence;
}

export default longestCollatzSequence;
