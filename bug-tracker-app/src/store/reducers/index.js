import { combineReducers } from "redux";
import bugsReducer from "../../bugs/reducers/bugsReducer";
import projectsReducer from "../../projects/reducers/projectsReducer";


const rootReducer = combineReducers({
    bugs : bugsReducer, 
    projects : projectsReducer
});

export default rootReducer;
