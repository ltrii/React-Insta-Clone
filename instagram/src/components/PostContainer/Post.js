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
          <CardBody>
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        </CardBody>
      <CardImg width="100%" alt="post thumbnail"
            className="post-image"
            src={props.post.imageUrl}
          />
        <CardBody>
          <CardText>
        <CommentSection comments={props.post.comments} />
        </CardText>
        </CardBody>
        </Card>
      </div>
  );
};


export default Post;