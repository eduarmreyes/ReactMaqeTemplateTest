import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostAuthor from './post-author';

class PostDetails extends Component {
	renderPosts(postData) {
		return(
     	<div key={ postData.id }>
	    	<div className="post-details-img">
	      	<img src={ postData.image_url } />
	    	</div>
	    	<div className="post-details-info">
	    		<h3>{postData.title }</h3>
	    		<p>{ postData.body }</p>
	    		<p><span>{ postData.created_at }</span></p>
	    	</div>
	    	<PostAuthor />
    	</div>
   	);
		console.log(postData);
	}

  render() {
    return (
      <div className="post-details">
      	{ this.props.posts.map(this.renderPosts) }
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
	return { posts };
}

export default connect(mapStateToProps)(PostDetails);