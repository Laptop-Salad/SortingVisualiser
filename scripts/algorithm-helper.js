/* 
    @desc To swap two bars on the UI
    @param a and b, The id's of the elements
*/
function swapUI(a, b) {
    document.getElementById(a).style.height = (bars[b])+"px";
    document.getElementById(b).style.height = (bars[a])+"px";
}

/* 
    @desc To swap two elements in the bars array
    @param a and b, the id of the elements
*/
function swap(a, b) {
    const one = bars[a];
    const two = bars[b];

    bars[a] = two;
    bars[b] = one; 
} 

/* 
    @desc Delay code by ms
    @param ms, time to delay

*/
function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}

/*
    @desc colours each bar green in order as an animation to show
    that sorting is complete
*/
async function sorted() {
    for (i in bars) {
        await sleep(10);
        let elem = document.getElementById(i);
        elem.classList.remove("bg-light");
        elem.classList.add("bg-success");
    }
}

/* 
    @desc Highlights two elements that are to be swapped
    @param a and b, The id's of the elements
*/
function swapping(a, b) {
    let elemA = document.getElementById(a);
    let elemB = document.getElementById(b);

    elemA.classList.remove("bg-light");
    elemB.classList.remove("bg-light");

    elemA.classList.add("bg-warning");
    elemB.classList.add("bg-warning");
}

/* 
    @desc To return an element to its original colour
    @param a, The id of the element
*/
function returnColour(a) {
    let elemA = document.getElementById(a);
    elemA.classList.remove("bg-warning");
    elemA.classList.add("bg-light");
}