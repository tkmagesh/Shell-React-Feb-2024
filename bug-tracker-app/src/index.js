import { bindActionCreators  } from 'redux'
import { createRoot } from 'react-dom/client';
import './index.css';

import * as bugActionCreators from './bugs/actions'
import store from './store'
import BugTracker from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch)

const root = createRoot(document.getElementById('root'));

function renderBugTracker(){
    const bugs = store.getState()
    root.render(<BugTracker bugs={bugs} {...bugActionDispatchers }/>)
}
renderBugTracker()
store.subscribe(renderBugTracker)