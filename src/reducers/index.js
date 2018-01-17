import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    posts: PostsReducer,
    form: formReducer
});