function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i
        }
    }
    return -1
}

function binarySearch(arr, val, start, end) {
    var start = start === undefined ? 0 : start
    var end = end === undefined ? arr.length : end

    if (start > end) {
        return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = arr[index]

    console.log(start, end)
    if (item == val) {
        return index
    }
    else if (item < val) {
        return binarySearch(arr, val, index + 1, end)
    }
    else if (item > val) {
        return binarySearch(arr, val, start, index - 1)
    }
}

const list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

console.log(binarySearch(list, 8)) // (0, 10), (0, 4), (3, 4), 3
console.log(binarySearch(list, 16))
// (0, 10), (0, 4), (3, 4), (3), (0, 10), (6, 10), (6, 7), (7, 7), -1