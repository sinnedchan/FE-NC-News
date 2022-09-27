import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://sinnedchan-nc-new-example-api.herokuapp.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article["article_id"]} article={article} />
      ))}
    </div>
  );
}
