## 1. What is the Big O
1. 0(1) - they are asking for a specific thing and one thing is returned
2. 0(n) - you are essentially looping through everyone until the correct answer is returned.
## 2. Even or odd
```
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```
0(n) - One question results in one answer. 
## 3. Are you here?
```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```
O(n^k) - nested loops

## 4. Doubler
```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```
O(n) - single loop applies algo to each index of array one at a time

## 5. Naive search
```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```
O(n) - single loop applies crawls through array until the correct answer is found
## 6. Creating Pairs
```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j]);
        }
    }
}
```
O(n^k) - nested loops
## 7. Compute the sequence
```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```
this prints the fibonacci sequence
O(n) - loops through each index one at a time and prints the answer

## 8. An efficient search
```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```
O(log(n)) - Seems to work from the middle out until it finds the correct search item. I don't know what makes it logarithmic, but an array of 20 items never passed 5 loops

## 9. Random element
```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```
O(1) - finds one random number in array. Only one search will happen regardless of array length

## 10. What am I?
```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```
O(n) - this algo determines if `n` is a prime number and I think it's constant? If the `n` is not a prime number it terminates right away, if it isn't it loops through every number on it's way to determining the answer.

For example `isWhat(101)` is true but it loops through the algorithm 99 times (since `i` starts at 2)