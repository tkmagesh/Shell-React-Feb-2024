const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        console.log('processed by promiseMiddleware')
        action.then(actionObj => {
            next(actionObj)
        })
    } else {
        next(action);
    }
}

export default promiseMiddleware;