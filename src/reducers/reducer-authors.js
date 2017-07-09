import { FETCH_AUTHORS } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_AUTHORS:
			// return state.concat([ action.payload.data ]);
			return action.payload.data;
		break;
	}
	return state;
}