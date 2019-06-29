import { createStore } from 'redux';
import reducer from './reducers/videos';

const store = createStore(reducer, {
	suggestionList: [],
	lastMoviesList: []
});

export default store;