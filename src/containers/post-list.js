import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchPostDetails } from '../actions/index';

import PostDetails from './post-details';

class PostList extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.fetchPostDetails();
	}

  render() {
    return (
      <div className="post-list">
      	Post List
      	<PostDetails />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPostDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostList);