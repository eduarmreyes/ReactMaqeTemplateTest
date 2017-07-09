import React, { Component } from 'react';
import ForumDetails from './forum-details';
import PostList from '../containers/post-list';
import ForumPagination from './forum-pagination';

export default class Forum extends Component {
	render() {
		return (
      <div className="forum">
      	<ForumDetails />
      	<PostList />
      	<ForumPagination />
      </div>
    );
	}
}