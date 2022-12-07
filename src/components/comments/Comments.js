import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hook/use-http";
import { getSingleQuote } from "../../utils/api";
import CommentItem from "./CommentItem";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ test }) => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, data } = useHttp(getSingleQuote);
  console.log(data);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const findedData = data?.data.find((el) => el.id === quoteId);

  console.log(findedData, 'finded data comments');

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
      {isAddingComment && <NewCommentForm sendRequest={sendRequest} />}
      <p>Comments...</p>
      <p>
        {findedData?.comments.map((comment, index) => (
          <p>
            <h1>{index + 1}</h1>
            <CommentItem {...comment} key={comment.id} />
          </p>
        ))}
      </p>
    </section>
  );
};

export default Comments;
