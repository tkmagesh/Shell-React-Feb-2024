const initialState = [
    { id: 1, name : 'Bug - 1', isClosed : false, projectId : 1, createdAt : new Date()},
    { id: 2, name : 'Bug - 2', isClosed : true, projectId : 2, createdAt : new Date() },
]
function bugsReducer(currentState=initialState, action){
    switch (action.type) {
        case 'BUGS_ADD_NEW':
            const newBug = action.payload
            return [...currentState, newBug]
            break;
        case 'BUGS_UPDATE':
            const updatedBug = action.payload
            return currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug)
        case 'BUGS_REMOVE':
            const bugToRemove = action.payload
            return currentState.filter(bug => bug.id !== bugToRemove.id)
        case 'BUGS_INIT':
            return action.payload
        default:
            return currentState;
    }
    
    
}
export default bugsReducer;
