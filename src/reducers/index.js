import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import AuthorsReducer from './reducer-authors';

const rootReducer = combineReducers({
	posts: PostsReducer,
	authors: AuthorsReducer,
});

export default rootReducer;
