import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../services/makeRequest';
import { getPosts } from '../services/posts';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  console.log('posts: ', posts);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h1>
      ))}
    </div>
  );
}
