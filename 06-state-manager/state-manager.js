let StateManager = (function(){
    let _state = undefined,
        _callbacks = [],
        _reducer = undefined;

    function getState(){
        return _state;
    }

    function subscribe(callbackFn){
        _callbacks.push(callbackFn)
    }

    // private
    function notifyChanges(){
        _callbacks.forEach(callbackFn => callbackFn())
    }

    function dispatch(action){
        let newState = _reducer(_state, action);
        if (newState === _state) return;
        _state = newState;
        notifyChanges()
    }

    function createStore(reducer){
        if (!reducer || typeof reducer !== 'function')
            throw new Error('reducer must be a function')
        _reducer = reducer;
        let store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore }

})()
