import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="commentText">
      <div className="comment">{props.comment.text}</div>
      {' '}
      <div className="user">-{props.comment.username}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;