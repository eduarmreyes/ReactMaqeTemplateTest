import React, { Component } from 'react';
import { connect } from 'react-redux';
import timeago from 'timeago.js';

import PostAuthor from './post-author';

class PostDetails extends Component {
	renderPosts(postData) {
		return(
     	<div key={ postData.id } className='row post-details-wrapper'>
	    	<div className='col-md-2 post-details-img'>
	      	<img src={ postData.image_url } />
	    	</div>
	    	<div className='col-md-6 post-details-info'>
	    		<h3>{postData.title }</h3>
	    		<p>{ postData.body }</p>
	    		<p className="post-details-time-ago"><span><i className="fa fa-clock-o" aria-hidden="true"></i> { timeago().format(postData.created_at) }</span></p>
	    	</div>
	    	<PostAuthor />
    	</div>
   	);
		console.log(postData);
	}

  render() {
    return (
      <div className='post-details'>
      	{ this.props.posts.map(this.renderPosts) }
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
	return { posts };
}

export default connect(mapStateToProps)(PostDetails);