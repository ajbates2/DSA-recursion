## 1. Implement Array class from scratch
```

class Array {
    constructor() {
        this.mem = new Memory()
        this.length = 0;
        this._capacity = 0;
        this.ptr = this.mem.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        this.mem.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = this.mem.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of Memory');
        }
        this.mem.copy(this.ptr, oldPtr, this.length);
        this.mem.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this.mem.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = this.mem.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.mem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
```
## 2. Explore the push() method
`arr.push(3)`: length = 1, capacity = 3, address = 0

`arr.push(5), (15), etc.`: length = 6, capacity = 12, address = 3

- length is self explanatory
- capacity increases by the size ratio when the capacity limit is reached
- address increases don't make sense to me.

## 3. pop() method

- length: 3
- capacity: 12
- address: 3

Nothing really changes as far as memory goes. pop() only affects the length of what I'm assuming would be the outputted array, without removing the information.

## 4. Understanding more

`arr.remove(0)` removes 1st item in array

`arr.push('tauhida)` returns `NaN` because the 'memory' (float64array) only allows number values

`._resize()` is used to allocate the correct amount of memory based on the given array with enough headroom for larger array's

## 5. URLify
```
function urlify(str) {
    let newStr = str.replace(/ /g, '%20')
    return newStr
}
```

## 6. filter
```
function filtr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
```

## 7. Max Sum
```
function findMaxSum(arr) {
    let max = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if (max < sum) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}
```

## 8. Merge arrays
```
function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2)
    let sorted = merged.sort((a, b) => { return a - b })
    return sorted
}
```
## 9. Remove characters
```
function vowelRemover(string, vowels) {
    let str = Array.from(string)
    let vwls = new RegExp('[' + vowels + ']')
    let filArr = str.map(char => {
        if (vwls.test(char)) {
            char = ''
        } else { return char }
    })
    let final = ''
    for (let i = 0; i < filArr.length; i++) {
        if (filArr[i] !== undefined) {
            final += filArr[i];
        }
    }
    return final
}
```
## 10. Products
```

```