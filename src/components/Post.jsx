import { useState, useEffect } from 'react';

function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.error('შეცდომა:', error));
  }, []);

  if (!post) {
    return <h2>იტვირთება...</h2>;
  }

  return (
    <div className="post-card">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;