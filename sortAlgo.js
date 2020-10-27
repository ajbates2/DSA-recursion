function swap(array, i, j) {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

function bubbleSort(array) {
    let swaps = 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1)
            swaps++
        }
    }
    if (swaps > 0) {
        return bubbleSort(array)
    }
    return array
}

const sortArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

//console.log(bubbleSort(sortArr))

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)

    left = mergeSort(left)
    right = mergeSort(right)
    console.log(left, right)
    return merge(left, right, arr)
}

function merge(left, right, arr) {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr[outputIndex++] = left[leftIndex++]
        }
        else {
            arr[outputIndex++] = right [rightIndex++]
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        arr[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        arr[outputIndex++] = right[i]
    }
    return arr
}

console.log(mergeSort(sortArr))

function quickSort(arr, start = 0, end = arr.length) {
    if (start >= end) {
        return arr
    }
    const middle = partition(arr, start, end)
    arr = quickSort(arr, start, middle)
    arr = quickSort(arr, middle + 1, end)
    return arr
}

function partition(arr, start, end) {
    const pivot = arr[end - 1]
    let j = start
    for (let i = start; i < end - 1; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, j)
            j++
        }
    }
    swap(arr, end - 1, j)
    return j
}

//console.log(quickSort(sortArr))