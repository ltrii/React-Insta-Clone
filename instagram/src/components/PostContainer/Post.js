import React from 'react';
import CommentSection from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import Likes from '../PostContainer/Likes';
import { Card, CardImg } from 'reactstrap';
  
import './Post.css';
  
  class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      }
    }

    addLike = () => {
      console.log("addlike run");
      let likes = this.state.likes + 1;
      this.setState({likes});
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
          <Likes addLike={this.addLike} likes={this.state.likes} />
        <CommentSection pID={this.props.post.imageUrl} comments={this.props.post.comments} />
        </Card>
      </div>
  );
    }
};



export default Post;