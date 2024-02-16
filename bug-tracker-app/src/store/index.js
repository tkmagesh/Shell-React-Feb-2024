import { createStore } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer'

const store = createStore(bugsReducer);

export default store;