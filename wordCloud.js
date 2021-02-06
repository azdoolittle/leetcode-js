// TODO Write code that takes a long string and builds its word cloud data in a map ↴ , 
// TODO where the keys are words and the values are the number of times the words occurred.

function buildWordCloud(string) {
  const wordCloud = new Map();
  const wordArr = string.split(' ');
  const setWord = (word) => {
    const entry = word.toLowerCase();
    if (wordCloud.has(entry)) {
      wordCloud.set(entry, wordCloud.get(entry) += 1);
    }
    wordCloud.set(entry, 1);
  }
  wordArr.forEach(setWord)
  return wordCloud;
}