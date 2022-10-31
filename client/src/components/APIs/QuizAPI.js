import axios from "axios";

const baseURL = "http://localhost:5000/api/v1/game";

const getWords = () => axios.get(`${baseURL}/words`);
const postScore = (finalScore) => axios.post(`${baseURL}/rank`, { finalScore });

export const QuizAPI = {
  getWords,
  postScore,
};
