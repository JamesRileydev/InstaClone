import React from "react";
import PropTypes from 'prop-types';
import "./CommentSection.css";

const Comment = props => {
    console.log(props)
    return (
        <div>
            <div>{props.comment.id}</div>
            <div>{props.comment.comments.map(comments => (
                <div>{comments.text}</div>
            ))}</div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        comments: PropTypes.shape({
            text: PropTypes.string})
    })
};

export default Comment;