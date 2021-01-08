/** Function that determines if the value is a multiple of the testNumber
 * @param  {number} multiple - Number value that is being tested as a multiple of the `value` parameter.
 * @param  {number} value - Number that when divided into the multiple had no remainder.
 *
 * Testing if 3 is a multiple of 15: isMultiple(15, 3) // returns true.
 * @returns {boolean}
 * @throws {error} Value must be smaller than multiple.
 */
function isMultiple(multiple, value) {
  if (Math.abs(value) > Math.abs(multiple)) {
    throw error('Value cannot be larger than multiple.');
  }
  return multiple % value === 0;
}

export default isMultiple;
