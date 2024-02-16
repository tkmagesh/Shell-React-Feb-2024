
export function remove(projectToRemove){
    return {
        type : 'PROJECTS_REMOVE',
        payload : projectToRemove
    }
}