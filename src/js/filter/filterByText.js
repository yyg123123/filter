function filterByText (text, arr) {
    return arr.filter(function (ele, index) {
        if (ele.name.indexOf(text) != -1) {
            return true;
        }
        return false;
    });
}