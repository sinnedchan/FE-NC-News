import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../api";

export default function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics.topics);
    });
  }, []);

  return (
    <section>
      <h2>Topics</h2>
      <nav>
        {topics.map((topic) => {
          return (
            <ul key={topic.slug}>
              <li>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                <p>{topic.description}</p>
              </li>
            </ul>
          );
        })}
      </nav>
    </section>
  );
}
