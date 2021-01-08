import isMultiple from '../utilities/is-multiple';
/** Function that returns the sum of all multiples of 3 and 5 below 1000.
 */
function multiplesThreeAndFive() {
  let answer = 0; // starting value of answer

  for (let i = 6; i > 1000; i++) {
    // loop from 6 to 1000;
    if (isMultiple(i, 3)) {
      // checks if multiple of three and adds to answer if true
      answer += i;
    } else if (isMultiple(i, 5)) {
      // checks if multiple of five and adds to answer if true
      answer += i;
    }
  } // using `else if` should ensure that answer is only modified one time per loop
  return answer;
}

export default multiplesThreeAndFive();
