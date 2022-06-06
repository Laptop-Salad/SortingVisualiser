var n = 20;
var arr = [];

function generateDivs() {
    for (var i in arr) {
        var newElem = document.createElement('div');
        newElem.id = i;
        newElem.innerHTML = arr[i];
        newElem.className = "bg-light w-25 m-1";
        var divHeight = (arr[i] * 8) + 10;
        newElem.style.height = divHeight+"px";
        document.getElementById("graphArea").appendChild(newElem);
    }
}

function createArray() {
    for (var i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;;
        arr[i] = randomNum;
        console.log(arr[i]);
    }

    generateDivs();
}

