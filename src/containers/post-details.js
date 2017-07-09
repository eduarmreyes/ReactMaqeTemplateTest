import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import timeago from 'timeago.js';

// actions
import { fetchAuthors } from '../actions/index';

import PostAuthor from './post-author';

class PostDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentAuthor: []
		};

		this.renderPosts = this.renderPosts.bind(this);
	}

	renderPosts(postData) {
		const iAuthorID = postData.author_id - 1;
		return(
     	<div key={ postData.id } className='row post-details-wrapper'>
	    	<div className='col-md-2 post-details-img'>
	      	<img src={ postData.image_url } />
	    	</div>
	    	<div className='col-md-7 post-details-info'>
	    		<h3>{ postData.title }</h3>
	    		<p>{ postData.body }</p>
	    		<p className="post-details-time-ago"><span><i className="fa fa-clock-o" aria-hidden="true"></i> { timeago().format(postData.created_at) }</span></p>
	    	</div>
	    	<PostAuthor author={ this.props.authors[iAuthorID] } />
    	</div>
   	);
	}

	componentWillMount() {
		this.props.fetchAuthors();
	}

  render() {
    return (
      <div className='post-details'>
      	{ this.props.posts.map(this.renderPosts) }
      </div>
    );
  }
}

function mapStateToProps({ authors, posts }) {
	return { authors, posts };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchAuthors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);