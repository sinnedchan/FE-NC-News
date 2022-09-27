import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://sinnedchan-nc-new-example-api.herokuapp.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2> Articles Loading </h2>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard key={article["article_id"]} article={article} />
      ))}
    </ul>
  );
}
