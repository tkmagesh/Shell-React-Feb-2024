import { useSelector } from "react-redux"

function useBugs(){
    const bugsData = useSelector(({bugs, projects}) => {
        return {
            bugs : bugs.map(bug => ({
                ...bug,
                /* projectName : projects.find(project => project.id === bug.projectId).name */
                projectName : bug.projectId
            })),
            closedCount : bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0),
            projects : projects
        }
    })
    return bugsData
}

export default useBugs;