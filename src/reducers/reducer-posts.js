import { FETCH_POSTS } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_POSTS:
			// return state.concat([ action.payload.data ]);
			return [ action.payload.data, ...state ];
		break;
	}
	return state;
}