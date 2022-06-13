// To swap two bars on the UI
// A and B being the ID of the two bars to swap
function swapUI(a, b) {
    document.getElementById(a).style.height = (bars[b])+"px";
    document.getElementById(b).style.height = (bars[a])+"px";
}

// To swap two elements in the bars array
// A and B being the ID of the two bars to swap
function swap(a, b) {
    const one = bars[a];
    const two = bars[b];

    bars[a] = two;
    bars[b] = one; 
} 

// Delay code by ms
function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}

// Selection sort algorithm
async function selectionSort() {

    // For each element, traverse through the bars array once
    for (let i = 0; i < bars.length; i++) {
        // Store the smallest
        var smallest = i;

        // Find smallest in current iteration
        for (let j = i + 1; j < bars.length; j++) {
            if (bars[j] < bars[smallest]) {
                smallest = j;
            }
        }

        // If the first element of the unsorted portion is not the smallest
        if (smallest !== i) {
            // Delay by 1s
            await sleep(1000);
            // Swap the elements on the UI and in bars array
            swapUI(i, smallest);
            swap(smallest, i);
        }
    }

    // Completed sorting so enable inputs
    switchElems(false);
}

// Bubble sort algorihtm
async function bubbleSort() {
    // Keep track of amount of swaps
    let swaps = -1;

    // While there are swaps do
    do {
        swaps = 0;

        // Traverse the bars array
        for (let i = 0; i < bars.length -1; i++) {

            // Get a pair and if the next element is greater than the previous
            if (bars[i] > bars[i+1]) {
                // Delay by 1s
                await sleep(1000);

                // Swap the elements on the UI and in bars array
                swapUI(i, i+1);
                swap(i, i+1);
                swaps = true;

            }
        }
    } while (swaps);

    // Completed sorting elems so enable inputs
    switchElems(false);
}
