import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hook/use-http";
import { getSingleQuote } from "../../utils/api";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ test }) => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, data } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const findedData = data?.data.find((el) => el.id === quoteId);
  console.log(findedData);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
      <p>
        {findedData?.comments?.map((comment) => (
          <div>{comment.text}</div>
        ))}
      </p>
    </section>
  );
};

export default Comments;
