import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
// export const ROOT_URL = 'http://maqe.github.io/json/';
export const ROOT_URL = '../api';

export function fetchPostDetails() {
	// we use it like this because we want to make it modular
	const url = `${ROOT_URL}/posts.json`;
	// using axios instead of jQuery or Angular because I just need
	// request and not to load all the functionality of those libraries
	// Also axios is cool, and uses promises
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchAuthors() {
	// in a real app, the author id should have been part of the request
	const url = `${ROOT_URL}/authors.json`;
	const request = axios.get(url);

	return {
		type: FETCH_AUTHORS,
		payload: request
	};
}
