import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PostAuthor extends Component {
  constructor(props) {
    super(props);

    this.renderPostAuthor = this.renderPostAuthor.bind(this);
  }

  renderPostAuthor() {
    return (
      <div className="post-author">
        <div className="post-author-rounded-img">
          <img src={ this.props.author.avatar_url } className="img-circle" />
        </div>
        <div className="post-author-information">
          <a href="#">{ this.props.author.name }</a>
          <p>{ this.props.author.role }</p>
          <p><span><i className="fa fa-map-marker"></i></span> { this.props.author.place }</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-3 post-wrapper">
        { (this.props.author) ? this.renderPostAuthor() : "Loading author..." }
      </div>
    );
  }
}