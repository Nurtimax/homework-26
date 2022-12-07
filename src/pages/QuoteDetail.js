import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hook/use-http";
import { getSingleQuote } from "../utils/api";


const QuoteDetail = () => {
  const { quoteId } = useParams();

  const { sendRequest,  data } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);


  const currentQuote = data?.data.find((quote) => quote.id === quoteId) || {};

  return (
    <>
      <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
