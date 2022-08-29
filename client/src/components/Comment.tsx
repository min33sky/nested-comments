import React, { useState } from 'react';
import CommentList from './CommentList';

interface Props {
  comment: any;
  getReplies: (parentId: string) => any[];
}

export default function Comment({ comment, getReplies }: Props) {
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);

  const childComments = getReplies(comment.id);

  console.log('childComments: ', childComments);

  return (
    <div className="comment">
      <div className="header">
        <span className="name">{comment.user.name}</span>
        <span className="date">
          {dateFormatter.format(Date.parse(comment.createdAt))}
        </span>
      </div>
      <div>
        <div className="message">{comment.message}</div>
      </div>

      {childComments?.length > 0 && (
        <>
          <div
            className={`nested-comments-stack ${
              areChildrenHidden ? 'hide' : ''
            }`}
          >
            <button
              className="collapse-line"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            ></button>
            <div className="nested-comments">
              <CommentList comments={childComments} getReplies={getReplies} />
            </div>
          </div>
          <button
            className={`btn mt-1 ${!areChildrenHidden ? 'hide' : ''}`}
            onClick={() => setAreChildrenHidden(false)}
          >
            Show Replies
          </button>
        </>
      )}
    </div>
  );
}

const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
  dateStyle: 'medium',
  timeStyle: 'short',
});
