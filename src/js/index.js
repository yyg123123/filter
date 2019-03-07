var oUl = document.getElementsByTagName('ul')[0];
var oInp = document.getElementsByTagName('input')[0];
// init view
function renderPage (arr) {
    var htmlStr = '';
    arr.forEach(function (ele, index) {
        htmlStr = htmlStr + '<li><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p><img src="' + ele.src + '"/></li>';
    });
    oUl.innerHTML = htmlStr;
}
renderPage(personArr);

// store
var store = createStore({
    text: '',
    sex: 'a'
})

// state -> update -> view
store.subscribe(function () {
    renderPage(lastFilterFunc(personArr));
})

// 防抖
function debounce (handler, delay) {
    var timer = null;
    return function (e) {
        var _self = this, _arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handler.apply(_self, _arg);
        }, delay)
    }
}

function deal () {
    // dispatch -> action -> state;
    store.dispatch({type: 'text', value: this.value});
}


oInp.oninput = debounce(deal, 500);



var oSpanArray = Array.prototype.slice.call(document.getElementsByTagName('span'), 0);
var lastSpan = oSpanArray[oSpanArray.length - 1];
oSpanArray.forEach(function (ele, index) {
    ele.onclick = function () {
        store.dispatch({type: 'sex', value:this.getAttribute('sex')});
        changeSpanActive(this);
    }
});

function changeSpanActive (dom) {
    lastSpan.className = 'btn';
    dom.className = 'btn active';
    lastSpan = dom;
}




















// pure function 

