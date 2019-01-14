import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className="postHeader">
      <div className="postThumbContain">
        <img
          alt="post header"
          className="postThumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;