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
            swapping(smallest, i);
            await sleep(speed);

            // Swap the elements on the UI and in bars array
            swapUI(i, smallest);
            swap(smallest, i);

            // Return swapped elements to their original colour
            returnColour(smallest);
            returnColour(i);
        }
    }

    // Completed sorting so enable inputs
    sorted();
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
                swapping(i, i+1);
                await sleep(speed);

                // Swap the elements on the UI and in bars array
                swapUI(i, i+1);
                swap(i, i+1);
                swaps = true;

                returnColour(i);
                returnColour(i+1);
            }
        }
    } while (swaps);

    // Completed sorting elems so enable inputs
    sorted();
    switchElems(false);
}
