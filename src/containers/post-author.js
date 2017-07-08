import React, { Component } from 'react';

export default class PostAuthor extends Component {
  render() {
    return (
      <div className="post-author">
        <div className="post-author-rounded-img">
          <img src="" />
        </div>
        <div className="post-author-information">
          <a href="#">Post Author Link to Profile</a>
          <p>Post Author Role</p>
          <p>Post Author From</p>
        </div>
      </div>
    );
  }
}