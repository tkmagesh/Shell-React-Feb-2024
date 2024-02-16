export function remove(bugToRemove){
    const remove_bug_action = {
        type : 'BUGS_REMOVE',
        payload : bugToRemove
    }
    return remove_bug_action;
}