import { createStore, combineReducers } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer';

// const store = createStore(bugsReducer);
// const store = createStore(projectsReducer)

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});

const store = createStore(rootReducer);

export default store;