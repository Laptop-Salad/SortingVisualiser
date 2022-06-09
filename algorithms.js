// To swap two bars on the UI
// A and B being the ID of the two bars to swap
function swapUI(a, b) {
    document.getElementById(a).style.height = ((bars[b] * 8) + 10)+"px";
    document.getElementById(b).style.height = ((bars[a] * 8) + 10)+"px";
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
            swap(smallest, i);
        }
    }

    // Completed sorting elems so enable inputs
    switchElems(false);
}

async function bubbleSort() {
    console.log("bubbleSort()");

    var swaps = -1;
    let swapped;

    do {
        swaps = false;
        console.log("EXITED FOR LOOPS");

        for (var i = 0; i < bars.length -1; i++) {
            if (bars[i] > bars[i+1]) {
                console.log(i, i+1);
                await sleep(1000);
                swapUI(i, i+1);
                swap(i, i+1);
                swaps = true;

            }
        }
    } while (swaps);
    // Completed sorting elems so enable inputs
    switchElems(false);
}

function mergeSort() {
    console.log("mergeSort()");    
}