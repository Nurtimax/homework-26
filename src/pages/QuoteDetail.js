import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hook/use-http";
import { getSingleQuote } from "../utils/api";

const DUMMY_QUOTES = [
  {
    id: "e1",
    author: "Nurtilek",
    text: "React is awesome framwork",
  },
  {
    id: "e2",
    author: "Nurtilek",
    text: "Angular is awesome framwork",
  },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const { sendRequest, status, data } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  console.log(data);

  const currentQuote = data?.data.find((quote) => quote.id === quoteId) || {};

  return (
    <>
      <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
      <Outlet test='Nurtilek' />
    </>
  );
};

export default QuoteDetail;
