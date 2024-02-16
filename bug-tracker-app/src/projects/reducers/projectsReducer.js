let initialState = [
    {id : 1, name : 'Bug Tracker'},
    {id : 2, name : 'Time Tracker'},
]
function projectsReducer(currentState = initialState, action){
    switch (action.type) {
        case 'PROJECTS_ADD_NEW':
            return [ ...currentState, action.payload]
        case 'PROJECTS_REMOVE':
            return currentState.filter(project => project.id !== action.payload.id)
        default:
            return currentState;
    }
}
export default projectsReducer