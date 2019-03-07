function filterBySex (sex, arr) {
    if (sex == 'a') {
        return arr;
    }else {
        return arr.filter(function (ele, index) {
            return ele.sex == sex;
        })
    }
}