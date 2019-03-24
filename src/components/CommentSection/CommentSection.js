import React from 'react';
import PropTypes from 'prop-types';
import "./CommentSection.css";
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div className="commentList">
            {props.posts.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    posts: PropTypes.array.isRequired
};

export default CommentSection;