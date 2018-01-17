import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <header>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/posts/new">Create Post</NavLink></li>
        </ul>
    </header>
);