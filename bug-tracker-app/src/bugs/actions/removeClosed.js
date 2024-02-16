export function removeClosed(bugs /* to be fixed */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed)
    const init_bugs_action = {
        type : 'BUGS_INIT',
        payload : bugsToRetain
    }
    return init_bugs_action
}