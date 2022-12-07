import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hook/use-http";
import { getSingleQuote, putSingleQuote } from "../../utils/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { sendRequest } = props;
  const commentTextRef = useRef();
  const { quoteId } = useParams();

  const { sendRequest: getSingleQuoteFunction, data } = useHttp(getSingleQuote);
  const { sendRequest: putDataHandler } = useHttp(putSingleQuote);

  const findedData = data?.data.find((el) => el.id === quoteId);

  useEffect(() => {
    getSingleQuoteFunction(quoteId);
  }, [quoteId, getSingleQuoteFunction]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    console.log(findedData);

    // send comment to server
    if (findedData) {
      getSingleQuoteFunction();
      sendRequest();
      const updateQuoteData = {
        ...findedData,
        comments: [
          ...findedData.comments,
          { text: commentTextRef.current.value },
        ],
      };
      if (commentTextRef.current.value) {
        putDataHandler(updateQuoteData);
        sendRequest();
      }
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
