// Swap two elems on UI
function swapUI(indexA, indexB) {
    console.log("Swapped", bars[indexA], bars[indexB]);
    console.log("Swapped", indexA, indexB);
    document.getElementById(indexA).style.height = (bars[indexB])+"px";
    document.getElementById(indexB).style.height = (bars[indexA])+"px";
}

// Swap two elems
function swap(indexA, indexB) {
    const one = bars[indexA];
    const two = bars[indexB];

    bars[indexA] = two;
    bars[indexB] = one; 
} 

// Delay code
function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}

// Animation to show that sorting is complete
async function sorted() {
    for (i in bars) {
        await sleep(10);
        let elem = document.getElementById(i);
        elem.classList.remove("bg-light");
        elem.classList.add("bg-success");
    }
}


//To return an element to its original colour
function returnColour(index) {
    let elemA = document.getElementById(index);
    elemA.classList.remove("bg-warning");
    elemA.classList.add("bg-light");
}

// Set a bar to a certain value
function setBar(index, value) {
    document.getElementById(index).style.height = value+"px";
}

//Highlights two elements that are to be swapped
function swapping(a, b) {
    let elemA = document.getElementById(a);
    let elemB = document.getElementById(b);

    elemA.classList.remove("bg-light");
    elemB.classList.remove("bg-light");

    elemA.classList.add("bg-warning");
    elemB.classList.add("bg-warning");
}

// To visualise sorting after sorting array
async function postSet(index, val) {
    for (let i = 0; i < index.length; i++) {
        await sleep(speed);
        await setBar(index[i], val[i]);
    }

    sorted();
}