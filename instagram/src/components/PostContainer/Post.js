import React from 'react';
import CommentSection from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
  
  import './Post.css';
  
  const Post = props => {
    return (
      <div className="postBorder">
      <Card>
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
      <CardImg width="100%" alt="post thumbnail"
            className="post-image"
            src={props.post.imageUrl}
          />
        <CommentSection comments={props.post.comments} />
        </Card>
      </div>
  );
};


export default Post;