import BugItem from './BugItem'

function BugList({bugs, toggle, remove, removeClosed}){
        const bugItems = bugs.map((bug) => (
        <BugItem {...{bug, toggle, remove}}/>
    ))
    return (
        <section className="list">
            <ul>
                {bugItems}
            </ul>
            <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
        </section>
    )
}
export default BugList