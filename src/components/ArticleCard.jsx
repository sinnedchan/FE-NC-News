export default function ArticleCard({ article }) {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>
        {article["author_id"]} {article.topic} {article["comment_count"]}
        {article.votes}
      </p>
    </div>
  );
}
