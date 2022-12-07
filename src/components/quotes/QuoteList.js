import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useHttp from "../../hook/use-http";
import { deleteSingleQuote } from "../../utils/api";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotesArray = [], ascending) => {
  return quotesArray.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
    return quoteA.id < quoteB.id ? 1 : -1;
  });
};

const QuoteList = ({ quotes }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const { sendRequest } = useHttp(deleteSingleQuote);

  const searchParams = new URLSearchParams(location.search);
  const isSortingAscending = searchParams.get("sort") === "asc";

  const changeSortingHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const clearAllHandler = () => {
    sendRequest();
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <button onClick={clearAllHandler}>Clear All</button>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
