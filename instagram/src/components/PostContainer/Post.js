import React from 'react';
import CommentSection from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
  
  import './Post.css';
  
  class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }



    render(){
    return (
      <div className="postBorder">
      <Card>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
      <CardImg width="100%" alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        <CommentSection pID={this.props.post.imageUrl} comments={this.props.post.comments} />
        </Card>
      </div>
  );
    }
};



export default Post;