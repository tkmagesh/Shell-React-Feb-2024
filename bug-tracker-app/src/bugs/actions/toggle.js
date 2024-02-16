export function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed }
    const update_bug_action = {
        type : 'BUGS_UPDATE',
        payload : toggledBug
    }
    return update_bug_action
}