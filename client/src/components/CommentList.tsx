import React from 'react';
import Comment from './Comment';

interface Props {
  comments: any[];
  getReplies: (parentId: string) => any[];
}

export default function CommentList({ comments, getReplies }: Props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} getReplies={getReplies} />
      ))}
    </div>
  );
}
