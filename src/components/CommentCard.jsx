export default function CommentCard({ comment }) {
  const dateFormat = new Date(comment.created_at);
  return (
    <div>
      <p>{comment.body}</p>
      <p>
        from {comment.author} @{" "}
        {`${dateFormat.getDate()}.${dateFormat.getMonth()}.${dateFormat.getFullYear()}`}
      </p>
    </div>
  );
}
