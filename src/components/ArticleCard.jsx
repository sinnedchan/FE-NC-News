import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, addVotes, minusVotes } from "../api";

export default function ArticleCard() {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsValid(false);
    getArticleById(article_id).then((article) => {
      setCurrArticle(article);
      setIsLoading(false);
      setIsValid(true);
    });
  }, [article_id]);

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
      <p>comments: {currArticle.comment_count} </p>
      <p>votes: {currArticle.votes + votes}</p>
      <button
        onClick={() => {
          addVotes(article_id).catch(() => {
            setVotes((currVotes) => {
              return currVotes - 1;
            });
          });
          setVotes((currVotes) => {
            return currVotes + 1;
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          minusVotes(article_id).catch(() => {
            setVotes((currVotes) => {
              return currVotes + 1;
            });
          });
          setVotes((currVotes) => {
            return currVotes - 1;
          });
        }}
      >
        -
      </button>
    </div>
  );
}
