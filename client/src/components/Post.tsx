import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/posts';
import Comment from './Comment';
import CommentList from './CommentList';

function Post() {
  const [post, setPost] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const params = useParams() as { id: string };

  useEffect(() => {
    getPost(params.id).then((post) => {
      setPost(post);
      setComments(post.comments);
    });
  }, []);

  const commentsByParentId = useMemo(() => {
    const group: { [key: string]: any[] } = {};
    comments.forEach((comment: any) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });
    return group;
  }, [comments]);

  const getReplies = (parentId: string) => {
    return commentsByParentId[parentId];
  };

  const rootComments = commentsByParentId['null'] || [];

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>
        <CommentList comments={rootComments} getReplies={getReplies} />
      </div>
    </div>
  );
}

export default Post;
