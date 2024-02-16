

let newBugId = 0; //to be fixed

export function createNew(newBugName, projectId){
    const newBug =  {
        id: newBugId++,
        name: newBugName,
        projectId : projectId,
        createdAt: new Date(),
        isClosed: false
    }
    const create_bug_action = { 
        type : 'BUGS_ADD_NEW',
        payload : newBug
    }
    return create_bug_action;
}