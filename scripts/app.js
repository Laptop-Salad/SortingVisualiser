// Initialise values
let arraySize; // Keeps track of sizeSlider
let speed; // Keeps track of speedSlider
let bars = []; // Array of sizes of bars
let setId = [];
let setVal = [];

document.addEventListener("DOMContentLoaded", function(event) {
    arraySize = document.getElementById("sizeSlider").value;
    createArray();
    setSpeed();
})

// Disables/Enables elements in inputs[] before/after sorting
function switchElems(disable) {
    const inputs = ["algoSelection", "sortBtn", "sizeSlider", "randomiseBtn"]; // Array of elements to disabled while sorting
    
    for (let input in inputs) {
        let elem = document.getElementById(inputs[input]);
        elem.disabled = disable;

        if (disable) {
            if (input == 1 || input == 3) {
                elem.classList.remove("bg-dark");
                elem.classList.add("bg-secondary");
            }
        } else {
            if (input == 1 || input == 3) {
                elem.classList.remove("bg-secondary");
                elem.classList.add("bg-dark");
            }     
        } 
    } 
}

// To toggle instant sort
function instantSort() {
    let elem = document.getElementById("instantSort");

    if (speed != 0) {
        elem.classList.remove("bg-dark");
        elem.classList.add("bg-light");
        speed = 0;
    } else {
        elem.classList.remove("bg-light");
        elem.classList.add("bg-dark");
        setSpeed();       
    }
}

// Changes the speed variable
function setSpeed() {
    speed = document.getElementById("speedSlider").value;
}

// Decides what sorting algorithm to use based on the option selected in algoSelection dropdown
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
            mergeSort(bars, 0, bars.length - 1);
            postSet(setId, setVal);
            switchElems(false);
            break;      
    }
}

//Deletes all the divs within graphArea and calls createArray() to generate a new set of divs  
function removeDivs() {
    for (let i in bars) {
        var elem = document.getElementById(i);
        elem.remove();
    }

    // Empty bars array
    bars = []

    createArray();
}

//Generates divs to the UI based on height in bars[]
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

// Creates an array of random numbers of arraySize size
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

