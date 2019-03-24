import React from "react";
import PropTypes from 'prop-types';
import "./CommentSection.css";

const Comment = props => {
    return (
        <div>
            <div>{props.comment.id}</div>
            <div>{props.comment.comments.text}</div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
};

export default Comment;