import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import { Link } from "react-router-dom";

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
        {articles.map((article) => {
          return (
            <li key={article["article_id"]}>
              <Link to={`/articles/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
              <p>
                {article.topic} {article.votes} {article.comment_count}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
