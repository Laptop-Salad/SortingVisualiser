var arraySize; // Keeps track of sizeSlider
var bars = []; // Array of sizes of bars
var inputs = ["algoSelection", "sortBtn", "sizeSlider", "randomiseBtn"]; // Array of elements to disabled while sorting

document.addEventListener("DOMContentLoaded", function(event) {
    arraySize = document.getElementById("sizeSlider").value;
    createArray();
})

function switchElems(isEnabled) {
    for (input in inputs) {
        document.getElementById(inputs[input]).disabled = isEnabled;
    }
} 

function callSort() {
    switchElems(true); // Disable certain elements

    var algo = document.getElementById("algoSelection").value;

    switch(algo) {
        case "1":
            selectionSort();
            break;
        case "2":
            bubbleSort();
            break;
        case "3":
            mergeSort();
            break;
    }

    console.log("End");
}

function generateDivs() {
    for (var i in bars) {
        var newElem = document.createElement('div');
        newElem.id = i;
        newElem.className = "bg-light w-25 m-1";
        var divHeight = (bars[i] * 8) + 10;
        newElem.style.height = divHeight+"px";
        document.getElementById("graphArea").appendChild(newElem);
    }
}

function removeDivs() {
    for (var i in bars) {
        var elem = document.getElementById(i);
        elem.remove();
    }

    bars = []

    createArray();
}

function sizeChange() {
    arraySize = document.getElementById("sizeSlider").value;
    removeDivs();
}

function algoChange() {
    removeDivs();
}

function createArray() {
    for (var i = 0; i < arraySize; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;;
        bars[i] = randomNum;
    }

    generateDivs();
}

