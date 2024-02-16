/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type)
            console.log('Before : ', store.getState())
            console.log('Action : ',action)
            next(action)
            console.log('After : ',store.getState())
        }
    }
} 
*/

const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Before : ', store.getState())
    console.log('Action : ',action)
    next(action)
    console.log('After : ',store.getState())
}

export default loggerMiddleware;