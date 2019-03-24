import React from "react";
import PropTypes from 'prop-types';

import "./PostList.css";

const Post = props => {
    return (
    <div>
        <div>{props.post.username}</div>
        <div>{props.post.id}</div>
        <div>{props.post.likes}</div>

    </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array
    })
};
export default Post;