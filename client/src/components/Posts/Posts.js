import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);

    return (
        <>
            <h2> Posts to come </h2>
            <Post />
            <Post />
            <Post />
        </>
    )
};

export default Posts