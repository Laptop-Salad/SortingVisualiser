// Initialise values
let arraySize; // Keeps track of sizeSlider
let speed; // Keeps track of speedSlider
let bars = []; // Array of sizes of bars
const inputs = ["algoSelection", "sortBtn", "sizeSlider", "randomiseBtn"]; // Array of elements to disabled while sorting

// Create initial array
document.addEventListener("DOMContentLoaded", function(event) {
    arraySize = document.getElementById("sizeSlider").value;
    createArray();
    setSpeed();
})

// To disable/enable certain elements in inputs array
function switchElems(isEnabled) {
    for (let input in inputs) {
        document.getElementById(inputs[input]).disabled = isEnabled;
    } 
}

// Called when speedSlider is changed
function setSpeed() {
    speed = document.getElementById("speedSlider").value;
}

function callSort() {
    // Disable certain elements
    switchElems(true);

    const algo = document.getElementById("algoSelection").value;

    switch(algo) {
        case "1":
            selectionSort();
            break;
        case "2":
            bubbleSort();
            break;
        case "3":
            callMergeSort();
            break;
    }
}

// Clear graphArea
function removeDivs() {
    for (let i in bars) {
        var elem = document.getElementById(i);
        elem.remove();
    }

    // Empty bars array
    bars = []

    createArray();
}

// To generate bar elements on the UI
function generateDivs() {
    for (let i in bars) {
        var newElem = document.createElement('div');

        newElem.id = i;
        newElem.className = "bg-light w-25 m-1 rounded-bottom";

        // Set height based on generated number
        var divHeight = (bars[i]);
        newElem.style.height = divHeight+"px";

        // Lastly add new element to the graphArea
        document.getElementById("graphArea").appendChild(newElem);
    }
}

// To generate array of random elements
function createArray() {
    arraySize = document.getElementById("sizeSlider").value;
    // Generate array of size arraySize
    for (let i = 0; i < arraySize; i++) {
        const randomNum = Math.floor(Math.random() * 500) + 1;;
        bars[i] = randomNum;
    }

    // Generate the elements on the UI
    generateDivs();
}

