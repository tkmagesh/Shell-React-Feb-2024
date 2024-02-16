import './index.css';

import BugEdit from "./views/BugEdit";
import BugStats from './views/BugStats';
import BugList from "./views/BugList";

function BugTracker({bugs, createNew, toggle, remove, removeClosed}){
    const closedCount = bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0);
    return(
        <>
            <h3>Bugs</h3>
            <hr/>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugEdit createNew={createNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
}
export default BugTracker;