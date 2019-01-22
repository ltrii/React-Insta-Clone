import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const pID = this.props.pID;
    if(localStorage.getItem(pID)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.pID))
      });
    } else {
      this.setComments();
    }
  }

  setComments = () => {
    localStorage.setItem(
      this.props.pID,
      JSON.stringify(this.state.comments)
    );
  }

  componentWillUnmount() {
    this.setComments();
  }

  commentHandler = ev => {
    this.setState({comment: ev.target.value});
  }

  submitHandler = ev => {
    ev.preventDefault();
    const newCom = {text: this.state.comment, username: 'leland'};
    const comments = this.state.comments.slice();
    comments.push(newCom);
    this.setState({comments, comment: ''})
    setTimeout(() => {
      this.setComments();
    }, 450);
  }

  render() {
    return (
      <div className="commentContain">
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
            comment={this.state.comment}
            submitComment={this.submitHandler}
            changeComment={this.commentHandler}/>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;