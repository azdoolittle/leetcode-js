/*
Write a function that, given a sentence like the one above, 
along with the position of an opening parenthesis, 
finds the corresponding closing parenthesis.

let str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

matchingParens(str, 57) // 80
*/


function matchingParens(str, openParenIdx) {
  let openParenCount = 0;

  for (let i = openParenIdx + 1; i < str.length; i++) {
    if (str[i] === "(") {
      openParenCount++;
    }

    else if (str[i] === ")") {
      if (openParenCount === 0) {
        return i;
      }
      
      openParenCount--;
    }
  }

  return "No matching parenthesis."
}