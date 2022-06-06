var n = 100;
var arr = [];

function generateDivs() {
    for (var i in arr) {
        var newElem = document.createElement('div');
        newElem.id = i;
        newElem.className = "bg-light w-25 m-1";
        var divHeight = (arr[i] * 8) + 10;
        newElem.style.height = divHeight+"px";
        document.getElementById("graphArea").appendChild(newElem);
    }
}

function removeDivs() {
    for (var i in arr) {
        var elem = document.getElementById(i);
        elem.remove();
    }

    createArray();
}

function createArray() {
    for (var i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;;
        arr[i] = randomNum;
    }

    generateDivs();
}

