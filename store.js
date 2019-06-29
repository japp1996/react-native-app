import { createStore } from 'redux';
import reducer from './reducers/videos';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


/*const store = createStore(reducer, {
	suggestionList: [],
	lastMoviesList: []
});*/

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {
	store,
	persistor	
};