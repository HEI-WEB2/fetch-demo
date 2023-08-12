import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const url = "http://localhost:8080";

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      fetch(url + '/posts')
        .then(res => res.json())
        .then(response => {
          setPosts(response);
        });
    }
    doFetch();
  }, []);

  return (
    <div>
      <Link to="/">
        back to home
      </Link>

      <h1>Newsfeed</h1>
      {posts.map(post =>
        <div key={post.id}>
          <div>title: {post.title}</div>
          <div>content: {post.content}</div>
        </div>
      )}
    </div>
  );
}
