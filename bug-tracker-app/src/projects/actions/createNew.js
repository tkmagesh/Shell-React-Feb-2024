let currentProjectId = 100;

export function createNew(newProjectName){
    const newProject = {
        id : ++currentProjectId,
        name : newProjectName
    }
    const action = {
        type : 'PROJECTS_ADD_NEW',
        payload : newProject
    }
    return action
}

