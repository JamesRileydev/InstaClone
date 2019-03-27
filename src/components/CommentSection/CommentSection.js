import React from 'react';
import PropTypes from 'prop-types';
import "./CommentContainer.css";
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div className="comment">
            {props.comms.map(comment => (
                <Comment key={comment.id} username={comment.username} text={comment.text} />
            ))}
        </div>
    )
}

// CommentSection.propTypes = {
//     posts: PropTypes.array.isRequired
// };

export default CommentSection;