import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_name } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles({ topic_name })
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic_name]);

  if (isLoading) {
    return <h2> Articles Loading </h2>;
  }
  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article["article_id"]} article={article} />
        ))}
      </ul>
    </div>
  );
}
