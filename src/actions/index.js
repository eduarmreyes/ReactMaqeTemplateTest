export const FETCH_POSTS = 'FETCH_POSTS';
export const ROOT_URL = 'http://maqe.github.io/json/posts.json';

export function fetchPostDetails() {
	// we use it like this because we want to make it modular
	const url = `${ROOT_URL}`;
	// using axios instead of jQuery or Angular because I just need
	// request and not to load all the functionality of those libraries
	// Also axios is cool, and uses promises
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}