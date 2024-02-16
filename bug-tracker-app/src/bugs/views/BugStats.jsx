function BugStats({count, closedCount}){
    return (
            <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{count}</span>
        </section>
    )
}
export default BugStats;