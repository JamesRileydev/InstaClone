import React from "react";
import PropTypes from 'prop-types';
import "./PostList.css";

const Post = props => {
    return (
    <div className="post">
        <div>{props.post.username}</div>
        <img src={props.post.thumbnailUrl} alt={props.post.imageUrl}/>
        <div>{props.post.likes} Likes</div>
    </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array
    })
};

export default Post;