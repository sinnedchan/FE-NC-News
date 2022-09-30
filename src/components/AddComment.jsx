import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { useParams } from "react-router-dom";
import { addComment } from "../api";

export default function AddComment({ setComments, setCommentCount }) {
  const user = useContext(UserContext);
  const [newBody, setNewBody] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((prev) => {
      const commentObj = {
        author: user,
        body: newBody,
        created_at: Date.now(),
      };
      setCommentCount((prev) => {
        return Number(prev) + 1;
      });
      const newComments = [commentObj, ...prev];
      return newComments;
    });
    const newComment = { username: user, body: newBody };
    addComment(article_id, user, newBody, newComment).catch(() => {
      setCommentCount((prev) => {
        return Number(prev) - 1;
      });
      setComments((prev) => {
        return prev.filter((comment) => {
          console.log(comment.body, newBody);
          return comment.body !== newBody;
        });
      });
    });
  };

  return (
    <section>
      <h4>Add a comment</h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setNewBody(event.target.value);
          }}
          type="text"
          id="commentBody"
          name="commentBody"
          minLength="10"
          maxLength="500"
          required
        />
        <input type="submit" />
      </form>
    </section>
  );
}
