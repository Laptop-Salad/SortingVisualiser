// Swap two elems on UI
function swapUI(a, b) {
    console.log("Swapped", bars[a], bars[b]);
    document.getElementById(a).style.height = (bars[b])+"px";
    document.getElementById(b).style.height = (bars[a])+"px";
}

// Swap two elems
function swap(a, b) {
    const one = bars[a];
    const two = bars[b];

    bars[a] = two;
    bars[b] = one; 
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

//Highlights two elements that are to be swapped
function swapping(a, b) {
    let elemA = document.getElementById(a);
    let elemB = document.getElementById(b);

    elemA.classList.remove("bg-light");
    elemB.classList.remove("bg-light");

    elemA.classList.add("bg-warning");
    elemB.classList.add("bg-warning");
}

//To return an element to its original colour
function returnColour(a) {
    let elemA = document.getElementById(a);
    elemA.classList.remove("bg-warning");
    elemA.classList.add("bg-light");
}