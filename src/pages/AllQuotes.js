import React, { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hook/use-http";
import { getAllQuotes } from "../utils/api";

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

const AllQuotes = () => {
  const { sendRequest, status, data } = useHttp(getAllQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (data?.length === 0) return <NoQuotesFound />;

  return (
    <>
      <div>
        <QuoteList quotes={data || []} />
      </div>
    </>
  );
};

export default AllQuotes;
