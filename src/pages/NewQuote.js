import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hook/use-http";
import { AddQuote } from "../utils/api";

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(AddQuote);
  console.log(status);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    navigate("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={status} />;
};

export default NewQuote;
