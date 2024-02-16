import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as bugActionCreators from '../actions'

function useBugActions(){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, useDispatch())
    return bugActionDispatchers
}

export default useBugActions;