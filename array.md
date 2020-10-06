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