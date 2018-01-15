import React from 'react'
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import Posts from '../components/Posts';
import PostsNew from '../components/PostsNew';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/new" component={PostsNew} />
        </div>
    );
};