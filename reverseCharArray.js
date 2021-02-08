/*
Write a function that 
takes an array of characters 
and reverses the letters in place

['a', 'n', 'd', 'r', 'e', 'w']
['w', 'e', 'r', 'd', 'n', 'a']
*/



function reverseCharArray(chars) {
  const reversedChars = [];

  for (let i = chars.length - 1; i >= 0; i--) {
    reversedChars.push(chars[i])
  }

  return reversedChars;
}