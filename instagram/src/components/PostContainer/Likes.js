import React from 'react';

import Heart from '../../assets/heart.svg';
import Comment from '../../assets/comment.svg';

const Likes = props => {
    return (
        <div className="likesContain" key="likesContainer" onClick={props.addLike}>
            <div className="likeimg">
                <img className="like heart" src={Heart} ></img>
            </div>
            <div className="likeimg">
                <img className="like comment" src={Comment} ></img>
            </div>
        </div>
    )
}

export default Likes;