import './index.css';

import BugEdit from "./views/BugEdit";
import BugStats from './views/BugStats';
import BugList from "./views/BugList";

import useBugs from './hooks/useBugs';
import useBugActions from './hooks/useBugActions';


function BugTracker(){
    const { bugs, closedCount, projects } = useBugs()
    const { createNew, toggle, remove, removeClosed } = useBugActions()
    return(
        <>
            <h3>Bugs</h3>
            <hr/>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugEdit createNew={createNew} projects={projects} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
}
export default BugTracker;