// To swap two bars on the UI
// A and B being the ID of the two bars to swap
function swapUI(a, b) {
    document.getElementById(a).style.height = ((bars[b] * 8) + 10)+"px";
    document.getElementById(b).style.height = ((bars[a] * 8) + 10)+"px";

    // document.getElementById(a).innerHTML = arr[b];
    // document.getElementById(b).innerHTML = arr[a];
}

// To swap two elements in the bars array
// A and B being the ID of the two bars to swap
function swap(a, b) {
    var one = bars[a];
    var two = bars[b];

    bars[a] = two;
    bars[b] = one; 
} 

// Delay code
function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}

async function selectionSort() {
    console.log("selectionSort()");
    for (let i = 0; i < bars.length; i++) {
        var smallest = i;

        for (let j = i + 1; j < bars.length; j++) {
            if (bars[j] < bars[smallest]) {
                smallest = j;
            }
        }

        if (smallest !== i) {
            await sleep(1000);
            swapUI(i, smallest);
            swap(i, smallest);
        }
    }

    // Completed sorting elems so enable inputs
    switchElems(false);
}

function bubbleSort() {
    console.log("bubbleSort()");
}

function mergeSort() {
    console.log("mergeSort()");    
}
