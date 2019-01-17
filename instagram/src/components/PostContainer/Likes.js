import React from 'react';

import styled, { css } from 'styled-components';

const LikesHold = styled.div`
    display: flex;
    flex-direction: column;
    `;

const LikesButtons = styled.div`
    display: flex;
    align-items: center;
    `;

const LikeButton = styled.div`
    padding: 5px;

    i {
        font-size: 1.5em;
    }
    `;

const LikeDisplay = styled.div`
    padding-left: 5px;
    font-size: .9em;
    font-weight: bold;
    `;

const Likes = props => {
    return (
        <LikesHold key="likesContainer">
            <LikesButtons>
            <LikeButton onClick={props.addLike}>
                <i class="far fa-heart"></i>
            </LikeButton>
            <LikeButton>
                <i class="far fa-comment"></i>
            </LikeButton>
            </LikesButtons>
            <LikeDisplay>
                {props.likes} likes.
            </LikeDisplay>
        </LikesHold>
    )
}

export default Likes;