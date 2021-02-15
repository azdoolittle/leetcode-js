/*
Write a function reverseWords() that 
takes a message as an array of characters 
and reverses the order of the words in place.

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
                [l e a e t s  d n u o p  e k a c]

reverseWords(message);

console.log(message.join(''));
Prints: 'steal pound cake'
*/

function reverseWords(charArr) {
  let charArrCopy = charArr.slice();
  let charLen = charArrCopy.length;
  let currWordStartIdx = 0;

  function reverseChars(chars, leftIdx, rightIdx) {
    while (leftIdx < rightIdx) {
      const temp = chars[leftIdx];
      chars[leftIdx] = chars[rightIdx];
      chars[rightIdx] = temp;
      leftIdx++;
      rightIdx--;
    }
  }

  reverseChars(charArrCopy, 0, charLen - 1);

  for (let i = 0; i <= charLen; i++) {
    if (i === charLen || charArrCopy[i] === ' ') {
      reverseChars(charArrCopy, currWordStartIdx, i - 1);
      currWordStartIdx = i + 1;
    }
  }

  return charArrCopy;
}