const Memory = require('./memory');

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

function main() {

    Array.SIZE_RATIO = 3;

    let arr = new Array();

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
    let str
    for (let i = 0; i < str.length; i++) {
        if (i === ' ') return '%20'
    }
    return str
}

urlify('tauhida parveen')