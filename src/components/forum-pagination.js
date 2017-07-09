import React, { Component } from 'react';

export default class ForumPagination extends Component {
  render() {
    return (
      <div className="forum-pagination">
	      <nav aria-label="Page navigation">
	        <ul className="pagination">
	          <li>
	            <a href="#" aria-label="Previous">
	              <span aria-hidden="true">Previous</span>
	            </a>
	          </li>
	          <li><a className="rounded active" href="#">1</a></li>
	          <li><a className="rounded" href="#">2</a></li>
	          <li><a className="rounded" href="#">3</a></li>
	          <li><a className="rounded" href="#">4</a></li>
	          <li><a className="rounded" href="#">5</a></li>
	          <li><a className="rounded" href="#">6</a></li>
	          <li><a className="rounded" href="#">7</a></li>
	          <li><a className="rounded" href="#">8</a></li>
	          <li>
	            <a href="#" aria-label="Next">
	              <span aria-hidden="true">Next</span>
	            </a>
	          </li>
	        </ul>
	      </nav>
      </div>
    );
  }
}
