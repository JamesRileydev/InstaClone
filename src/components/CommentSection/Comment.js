import React from "react";
import PropTypes from 'prop-types';
import "./CommentSection.css";

const Comment = props => {
    return (
        <div>
            <div className="comment">{props.comment.comments.map(comments => (
                <div key={comments.id}>{comments.text}</div>
            ))}</div>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    })
)};

export default Comment;