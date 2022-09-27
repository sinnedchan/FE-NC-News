export default function ArticleCard({ article }) {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>
        {article["author_id"]} {article.topic} {article["comment_count"]}
        {article.votes}
      </p>
    </li>
  );
}