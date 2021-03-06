const Memory = require('./memory');

class Arrays {
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

function main() {

    Arrays.SIZE_RATIO = 3;

    let arr = new Arrays();

    arr.push(3)
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.remove(0)
    arr.push("tauhida");

    console.log(arr);
}

function urlify(str) {
    let newStr = str.replace(/ /g, '%20')
    return newStr
}

//console.log(urlify('tauhida parveen'))
//console.log(urlify('www.thinkful.com /tauh ida parv een'))

function filtr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

//console.log(filtr([1, 2, 3, 5, 6, 7, 8, 9, 10]))

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

//console.log(findMaxSum([4, 6, -3, 5, -2, 1]))

function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2)
    let sorted = merged.sort((a, b) => { return a - b })
    return sorted
}

//console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

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

//console.log(vowelRemover('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function products(arr) {
    let front = []
    let back = []

    front[0] = 1
    back[arr.length - 1] = 1

    for (let i = 1; i < arr.length; i++) {
        front[i] = arr[i - 1] * front[i - 1]
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        back[i] = arr[i + 1] * back[i + 1]
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = front[i] * back[i]
    }
    return arr
}

//console.log(products([1, 3, 9, 4]))

function zeroed(arr, x = 0, y = 0, output = []) {
    if (arr.length === output.length) {
        return output
    }

    let xSum = arr[x].reduce((acc, val) => { return acc + val })
    console.log(xSum)

    if (xSum < arr[x].length) {
        output.push(0)
        zeroed(arr, x + 1, y, output)
        console.log(arr[x])
    }
    return output
}

const DDArray = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
]

console.log(zeroed(DDArray))

function isSubstring(str1, str2) {
    if (!str1 || !str2) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false
    }

    return (str1 + str1).includes(str2)
}

console.log(isSubstring('amazon', 'azonma'))
console.log(isSubstring('amazon', 'azonam'))