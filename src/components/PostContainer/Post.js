import React from "react";
import PropTypes from 'prop-types';
import "./PostContainer.css";
import CommentSection from '.././CommentSection/CommentSection';

const Post = props => {
    console.log(props.p.comments)
    return (
        <div className="post">
            <div>{props.p.username}</div>
            <img src={props.p.imageUrl} alt={props.p.imageUrl}/>
            <div>{props.p.likes} Likes</div>
        <CommentSection comms={props.p.comments}/>
        </div>
    )
}

// Post.propTypes = {
//     post: PropTypes.shape({
//         username: PropTypes.string,
//         thumbnailUrl: PropTypes.string,
//         likes: PropTypes.number,
//         comments: PropTypes.array
//     })
// };

export default Post;