import axios from 'axios';

function getBugsFromMemory(){
    const bugsInMemory = [
        { id: 1, name : 'Bug - 1', isClosed : false, projectId : 1, createdAt : new Date()},
        { id: 2, name : 'Bug - 2', isClosed : true, projectId : 2, createdAt : new Date() },
    ]
    return bugsInMemory;
}

async function getBugsFromServer(){
    const response = await axios.get('http://localhost:3030/bugs')
    return response.data;
}

// using asyncMiddleware
/* 
export function load(){
    return function(dispatch){
        const p = getBugsFromServer()
        p.then(function(bugs){
            const action = {
                type : 'BUGS_INIT',
                payload : bugs
            }
            dispatch(action);
        })
    }    
} */

// using promiseMiddleware
export function load(){
    const p = getBugsFromServer()
    const p2 = p.then(function(bugs){
        const action = {
            type : 'BUGS_INIT',
            payload : bugs
        }
        return action
    })
    return p2;
}


