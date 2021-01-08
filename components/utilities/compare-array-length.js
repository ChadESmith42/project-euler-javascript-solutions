/** Compares the lengths of array a and array b. Returns the longest array.
 * @param  {Array} a - Array of any length.
 * @param  {Array} b - Array of any length.
 * @returns {Array} Longest Array - Longest array.
 */
function findLongestArray(a, b) {
  return a.length >= b.length ? a : b;
}

function findShortestArray(a, b) {
  return a.length <= b.length ? a : b;
}

export default { findLongestArray, findShortestArray };
