// TODO: Write an efficient function that checks whether
// TODO: any permutation of an input string is a palindrome
/*
You can assume the input string only contains lowercase letters.

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/

/*
Build a Set of chars
Chars with pairs are deleted
*/
``
function permutationPalindrome(str) {
  const unpairedChars = new Set();

  for (let char of str) {
    if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char);
    }
  }

  return unpairedChars.size <= 1;
}