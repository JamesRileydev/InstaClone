import React from 'react';
import PropTypes from 'prop-types';

import "./PostList.css";

import Post from './Post';

const PostList = props => {
    return (
        <div>Posts List</div>
        // <div className="list">
        // {props.posts.map(post => (
        //     <Post key={post.created} post={post} />
        // ))}
        // </div>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;