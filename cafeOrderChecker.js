/*
Given three arrays,
write a function to check that 
my service is first-come, first-served. 
All food should come out in the 
same order customers requested it.

NOT FIRST-COME-FIRST-SERVED:
Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]

FIRST-COME-FIRST-SERVED:
Take Out Orders: [17, 8, 24]
Dine In Orders: [12, 19, 2]
Served Orders: [17, 8, 12, 19, 24, 2]
*/
function cafeOrderChecker(takeOut, dineIn, served) {
  let currTakeOutIdx = 0;
  let currDineInIdx = 0;
  let currServedIdx = 0;

  while (currServedIdx < served.length) {
    let currServedOrder = served[currServedIdx];

    if (currServedOrder === takeOut[currTakeOutIdx]) {
      currTakeOutIdx++;
    } else if (currServedOrder === dineIn[currDineInIdx]) {
      currDineInIdx++;
    } else {
      return false;
    }
    currServedIdx++;
  }
  return true;
}