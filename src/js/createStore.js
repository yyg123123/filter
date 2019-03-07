function createStore (initState) {
    var state = initState || {};
    var list = [];
    function getState () {
        // deepClone -> 
        return state;
    }

    function dispatch (action) {
        // {type: 'text', value: '王'}
        state[action.type] = action.value;
        list.forEach(function (ele, index) {
            ele();
        })
    }

    function subscribe (handler) {
        list.push(handler);
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
}
