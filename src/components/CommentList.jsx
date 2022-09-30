import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../api";
import AddComment from "./AddComment";

export default function CommentList({ article_id, comment_count }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(comment_count);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comments) => {
      setIsLoading(false);
      setComments(comments);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>loading comments</p>;
  }
  return (
    <div>
      <p>Comments ({commentCount})</p>
      <ul>
        {comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
      </ul>
      <AddComment
        setComments={setComments}
        article_id={article_id}
        setCommentCount={setCommentCount}
      />
    </div>
  );
}
