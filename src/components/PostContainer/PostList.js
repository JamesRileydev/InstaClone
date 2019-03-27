import React from 'react';
import PropTypes from 'prop-types';
import "./PostContainer.css";
import Post from './Post';

const PostList = props => {
    return (
        <div className="list">
            {props.posts.map(p => (
                <Post key={p.id} p={p} />
            ))}
        </div>
    );
};

// PostList.propTypes = {
//     posts: PropTypes.array.isRequired
// };

export default PostList;