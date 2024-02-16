import { remove } from "./remove"
import axios from 'axios';

export function removeClosed(bugs /* to be fixed */){
    return function(dispatch, getState){
        const bugs = getState().bugs
        const bugsToRemove = bugs.filter(bug => bug.isClosed)
        bugsToRemove
            .forEach(bugToRemove => {
                axios
                    .delete(`http://localhost:3030/bugs/${bugToRemove.id}`)
                    .then(() => {
                        const removeAction = remove(bugToRemove)
                        dispatch(removeAction)
                    })
            })
    }
}