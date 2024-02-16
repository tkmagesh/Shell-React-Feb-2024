import { combineReducers } from "redux";
import bugsReducer from "../../bugs/reducers/bugsReducer";
import projectsReducer from "../../projects/reducers/projectsReducer";

const rootReducer = combineReducers(bugsReducer, projectsReducer)

export default rootReducer;
