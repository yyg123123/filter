function combineFilterFunc (obj) {
    var combineObj = obj;
    return function (arr) {
        var lastArr = arr;
        for (var prop in combineObj) {
            lastArr = combineObj[prop](store.getState()[prop], lastArr);
        }
        return lastArr;
    }
}

var lastFilterFunc = combineFilterFunc({text: filterByText, sex: filterBySex});

