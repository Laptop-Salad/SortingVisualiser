// Initialise values
let arraySize; // Keeps track of sizeSlider
let speed; // Keeps track of speedSlider
let bars = []; // Array of sizes of bars
const inputs = ["algoSelection", "sortBtn", "sizeSlider", "randomiseBtn"]; // Array of elements to disabled while sorting

/*
    @desc Sets up initial array and sets speed
*/
document.addEventListener("DOMContentLoaded", function(event) {
    arraySize = document.getElementById("sizeSlider").value;
    createArray();
    setSpeed();
})

/*
    @desc Disables/Enables elements in inputs[] before/after sorting
*/
function switchElems(isEnabled) {
    for (let input in inputs) {
        document.getElementById(inputs[input]).disabled = isEnabled;
    } 
}

/*
    @desc Changes the speed variable
*/
function setSpeed() {
    speed = document.getElementById("speedSlider").value;
}

/*
    @desc Decides what sorting algorithm to use based on
    the option selected in algoSelection dropdown
*/
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
    }
}

/*
  @desc Deletes all the divs within graphArea and calls createArray()
  to generate a new set of divs  
*/
function removeDivs() {
    for (let i in bars) {
        var elem = document.getElementById(i);
        elem.remove();
    }

    // Empty bars array
    bars = []

    createArray();
}

/*
    @desc Generates divs to the UI based on height in bars[]
*/
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

/*
    @desc Generates an array of random elements and stores in bars[]
*/
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

