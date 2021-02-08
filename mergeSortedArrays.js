/*
Write a function to merge our arrays 
of orders into one sorted array.

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
*/

// @ts-check

function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];
  let currArr1Idx = 0;
  let currArr2Idx = 0;
  let currMergedIdx = 0;

  while (currMergedIdx < (arr1.length + arr2.length)) {
    if (arr1[currArr1Idx] <= arr2[currArr2Idx]) {
      mergedArr[currMergedIdx] = arr1[currArr1Idx];
      currArr1Idx++;
    } else {
      mergedArr[currMergedIdx] = arr2[currArr2Idx];
      currArr2Idx++;
    }
    currMergedIdx++
  }

  return mergedArr;
}