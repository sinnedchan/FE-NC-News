import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, changeVotes } from "../api";
import CommentList from "./CommentList";

export default function ArticleCard() {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [optVote, setOptVote] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsValid(false);
    getArticleById(article_id).then((article) => {
      setCurrArticle(article);
      setIsLoading(false);
      setIsValid(true);
    });
  }, [article_id]);

  const handleClick = (num) => {
    console.log("clicked");
    setOptVote((currVote) => currVote + num);
    changeVotes(article_id, num).catch(() => {
      setOptVote((currVote) => currVote - num);
    });
  };

  if (!isValid) {
    return <h2>Article does not exist!</h2>;
  }
  if (isLoading) {
    return <h2>Article is loading</h2>;
  }
  return (
    <div key={currArticle["article_id"]}>
      <h3>{currArticle.title}</h3>
      <p>
        {currArticle.author} {currArticle.created_at}
      </p>
      <p>{currArticle.topic} </p>
      <p>{currArticle.body} </p>
      <p>votes: {currArticle.votes + optVote}</p>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
      <p>Comments ({currArticle.comment_count}) </p>
      <CommentList article_id={article_id} />
    </div>
  );
}
