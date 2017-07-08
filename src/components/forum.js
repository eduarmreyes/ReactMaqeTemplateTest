import React, { Component } from 'react';
import ForumDetails from './forum-details';

// actions
import PostList from '../containers/post-list';

export default class Forum extends Component {
	render() {
		return (
      <div className="forum">
      	<ForumDetails />
      	<PostList />
      </div>
    );
	}
}