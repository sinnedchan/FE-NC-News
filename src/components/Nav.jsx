import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <p>Nav bar placeholder</p>
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
