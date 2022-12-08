import axios from "axios";

const BASE_URL = "https://quotes-test-project-default-rtdb.firebaseio.com/";

export const AddQuote = async (quoteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/quote.json`, quoteData);
    console.log(response, "post");
    getAllQuotes();
  } catch (error) {
    console.log(error);
  }
};

export const getAllQuotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/quote.json`);
    const result = response.data;
    const newArr = [];
    for (const key in result) {
      newArr.push({
        id: key,
        ...result[key],
      });
    }
    console.log("get");
    return newArr;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleQuote = async (quoteId) => {
  try {
    const response = await axios.get(`${BASE_URL}/quote.json`);
    const result = response.data;
    const newArr = [];
    for (const key in result) {
      const findedQuote = {
        id: key,
        comments: [result[key]],
        ...result[key],
      };
      newArr.push(findedQuote);
    }

    console.log("single get");
    const findedQuote = {
      id: quoteId,
      data: newArr,
    };

    return findedQuote;
  } catch (error) {
    console.log(error);
  }
};
