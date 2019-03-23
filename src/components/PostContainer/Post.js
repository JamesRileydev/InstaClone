import React from "react";

import "./PostList.css";

const Post = props => {
    return(
    <div className="postCard">
        <h3>{props.post.username}</h3>
    </div>
    )
}

export default Post;