import React from "react";
import PropTypes from 'prop-types';
import "./CommentContainer.css";

const Comment = props => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}

// Comment.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.shape({
//         text: PropTypes.string
//     })
// )};

export default Comment;