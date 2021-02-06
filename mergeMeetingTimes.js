/*
Write a function mergeRanges() that 
takes an array of multiple meeting time ranges 
and returns an array of condensed ranges.
*/

function mergeMeetingTimes(mtgs) {
  let sortedMtgs = mtgs.sort((a, b) => {
    return a.startTime - b.startTime
  });
  let mergedMtgs = [sortedMtgs[0]];
  for (let i = 1; i < sortedMtgs.length; i ++) {
    const currentMtg = sortedMtgs[i];
    const lastMergedMtg = mergedMtgs[mergedMtgs.length - 1];
    if (currentMtg.startTime <= lastMergedMtg.endTime) {
      lastMergedMtg.endTime = currentMtg.endTime;
    } else {
      mergedMtgs.push(currentMtg);
    }
  }
  return mergedMtgs;
}