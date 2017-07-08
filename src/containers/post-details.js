import React, { Component } from 'react';
import { connect } from 'redux';

import PostAuthor from './post-author';

class PostDetails extends Component {
  render() {
    return (
      <div className="post-details">
      	<div className="post-details-img">
	      	<img src="" />
      	</div>
      	<div className="post-details-info">
      		<h3>Post Title</h3>
      		<p>Post Content</p>
      		<p><span>Post Timeframe</span></p>
      	</div>
      	<PostAuthor />
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
	return { posts };
}

export default connect(mapStateToProps)(PostDetails);