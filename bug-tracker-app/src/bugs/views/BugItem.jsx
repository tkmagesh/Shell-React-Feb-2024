function BugItem({bug, toggle, remove}){
    return (
        <li>
            <span
                onClick={() => toggle(bug)}
                className={"bugname " + (bug.isClosed ? "closed" : "")}>{bug.name}</span>
            <span><small> [ { bug.projectName } ] </small></span>
            <div className="datetime">{[bug.createdAt.toString()]}</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}
export default BugItem;