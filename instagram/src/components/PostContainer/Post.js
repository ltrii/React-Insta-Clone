import React from 'react';
import CommentSection from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
  
  import './Post.css';
  
  const Post = props => {
    return (
      <div className="postBorder">
      <card>
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
        <CommentSection comments={props.post.comments} />
        </CardBody>
        </card>
      </div>
  );
};

export default Post;