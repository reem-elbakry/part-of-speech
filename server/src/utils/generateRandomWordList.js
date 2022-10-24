function generateRandomWordList(wordList) {
  let randomWordList = [];

  //* Add values to <10> elements */
  while (randomWordList.length < 10) {
    //* Generate random index between 0 and wordList length */
    let index = Math.floor(Math.random() * wordList.length);
    //* Check randomWordList doesn't include this element before pushing */
    if (!randomWordList.includes(wordList[index])) {
      randomWordList.push(wordList[index]);
    }
  }

  //** Check if randomWordList contains 4 different pos */
  if (
    randomWordList.some((element) => element.pos === "verb") &&
    randomWordList.some((element) => element.pos === "noun") &&
    randomWordList.some((element) => element.pos === "adverb") &&
    randomWordList.some((element) => element.pos === "adjective")
  ) {
    //** randomWordList contains the elements we're looking for */
    return randomWordList;
  } else {
    //** randomWordList contains the elements we're looking for */
    return generateRandomWordList(wordList);
  }
}

module.exports = { generateRandomWordList };
