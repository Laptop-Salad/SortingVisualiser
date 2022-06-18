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

    // Completed sorting
    sorted();
    switchElems(false);
}

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

    // Completed sorting
    sorted();
    switchElems(false);
}

/* Merge Sort*/
// Merge two sections of an array
function merge(arr, start, mid, end) {
    let rightStart = mid + 1;

    // Base case
    if (arr[mid] <= arr[rightStart]) {
        return;
    }

    // While there is length/space
    while (start <= mid && rightStart <= end) {
        // If first elem is sorted
        if (arr[start] <= arr[rightStart]) {
            start++;
        // Otherwise elem isn't sorted
        } else {
            let val = arr[rightStart];
            let index = rightStart;

            // While there is space
            while (index != start) {
                setId.push(index);
                setVal.push(arr[index-1]);

                arr[index] = arr[index - 1]; // Shift elems by 1
                index--;
            }

            setId.push(start);
            setVal.push(val);

            arr[start] = val;

            // Update variables
            start++;
            rightStart++;
            mid++;
        }
    }
}

// Split array
function mergeSort(arr, left, right) {
    // If there is size
    if (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        // Left half is start to mid
        mergeSort(arr, left, mid);

        // Right half is mid + 1 to right (end)
        mergeSort(arr, mid + 1, right);

        // Merge those two halves
        merge(arr, left, mid, right);
    }
}
