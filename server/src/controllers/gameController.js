const { jsonReader } = require("./../utils/jsonReader");
const { generateRandomWordList } = require("./../utils/generateRandomWordList");

//***************** Get Random Word List <10> ********************************/
const getWords = (req, res) => {
  //! Without utf-8 it will be buffer can't be read */
  jsonReader("./src/data/TestData.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const wordList = data.wordList;
      //** Generate random wordlist <10> */
      const randomWordList = generateRandomWordList(wordList);

      res.json(randomWordList);
    }
  });
};

//***************** Get User Rank ******************************************/
const getRank = (req, res) => {
  const { finalScore } = req.body; //number
  jsonReader("./src/data/TestData.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const scoresList = data.scoresList;
      let count = 0;
      //* How many are below finalScore? */
      for (let i = 0; i < scoresList.length; i++) {
        if (scoresList[i] < finalScore) {
          count++;
        }
      }
      //* Calculate rank */
      const rank = Math.round((count / scoresList.length) * 100);

      res.json(rank);
    }
  });
};

module.exports = {
  getWords,
  getRank,
};
