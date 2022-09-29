import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../api";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <ul>
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </ul>
  );
}
