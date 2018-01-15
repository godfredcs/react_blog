import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Posts extends Component {
    componentWillMount() {
        console.log(`This is the posts page`);
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                
                <Link to="/posts/new" className="btn btn-primary">Create Post</Link> 
                
                <p>Lists of posts</p>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchPosts }, dispatch);
}; 

export default connect(null, mapDispatchToProps)(Posts);