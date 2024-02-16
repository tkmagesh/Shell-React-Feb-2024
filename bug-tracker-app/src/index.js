import { bindActionCreators  } from 'redux'
import { createRoot } from 'react-dom/client';
import './index.css';

import * as bugActionCreators from './bugs/actions'
import * as projectActionCreators from './projects/actions';

import BugTracker from './bugs';
import ProjectsTracker from './projects';

import store from './store'

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch)
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

const root = createRoot(document.getElementById('root'));

function renderApp(){
    // const bugs = store.getState()
    const storeState = store.getState()
    const {bugs, projects} = storeState;

    // root.render(<BugTracker bugs={bugs} {...bugActionDispatchers }/>)
    root.render(
        <div>
            <h1>Bug Tracker</h1>
            <ProjectsTracker projects={projects} {...projectActionDispatchers}/>)
            <BugTracker bugs={bugs} {...bugActionDispatchers}/>
        </div>
    )
}
renderApp()
store.subscribe(renderApp)