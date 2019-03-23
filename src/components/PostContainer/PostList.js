import React from 'react';
import "./PostList.css";

import Post from './Post';

const PostList = props => {
    return (
        <div className="list">
        {props.list.map(post => (
            <Post key={post.created} post={post} />
        ))}
        </div>
    );
};

export default PostList;