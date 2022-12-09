import axios from "axios";

const BASE_URL = "https://quotes-test-project-default-rtdb.firebaseio.com/";

export const AddQuote = async (quoteData) => {
  console.log(quoteData);
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
    console.log("get", newArr);
    return newArr;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleQuote = async (quoteId) => {
  console.log("singlequote is working");
  try {
    const response = await axios.get(`${BASE_URL}/quote.json`);
    const result = response.data;
    const newArr = [];
    for (const key in result) {
      const findedQuote = {
        id: key,
        comments: [],
        ...result[key],
      };
      newArr.push(findedQuote);
    }

    const findedQuote = {
      id: quoteId,
      data: newArr,
    };

    return findedQuote;
  } catch (error) {
    console.log(error);
  }
};
export const deleteSingleQuote = async (quoteId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/quote.json`);
    console.log(response, "delete");
  } catch (error) {
    console.log(error);
  }
  getSingleQuote();
};

export const putSingleQuote = async (updateQuoteData) => {
  // getSingleQuote()
  console.log("put data is working");
  try {
    const response = await axios.put(
      `${BASE_URL}/quote/${updateQuoteData.id}.json`,
      updateQuoteData
    );
    console.log(response, "put data ");
    getSingleQuote(updateQuoteData.id);
  } catch (error) {
    console.log(error);
  }
};
