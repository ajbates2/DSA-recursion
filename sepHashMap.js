class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SepHashMap {
    constructor(initCap = 8) {
        this.length = 0
        this._hashTable = []
        this._capacity = initCap
        this._deleted = 0
    }

    get(key) {
        const hash = SepHashMap._hashString(key)
        const start = hash % this._capacity

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity
            const slot = this._hashTable[index]
            if (this._hashTable[index] === undefined) {
                throw new Error('Key error');
            }
            return {
                value: slot.value,
                next: slot.next
            }
        }
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity
        const index = this._findSlot(key)

        if (value === undefined) {
            value = SepHashMap._hashString(key)
        }

        if (loadRatio > SepHashMap.MAX_LOAD_RATIO || index >= this._capacity - 1) {
            this._resize(this._capacity * SepHashMap.SIZE_RATIO)
        }

        if (this._hashTable[index]) {
            let slot = this._hashTable[index]
            while (slot.next !== null) {
                slot = slot.next
            }
            slot.next = {
                value: value,
                next: null,
            }
        }

        if (!this._hashTable[index]) {
            this.length++
            this._hashTable[index] = {
                key,
                value,
                next: null,
                DELETED: false
            }
        }
    }

    delete(key) {
        const index = this._findSlot(key)
        const slot = this._hashTable[index]
        if (slot === undefined) {
            throw new Error('Key Error')
        }
        slot.DELETED = true
        this.length--
        this._deleted++
    }

    _findSlot(key) {
        const hash = SepHashMap._hashString(key)
        const start = hash % this._capacity

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity
            const slot = this._hashTable[index]

            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable
        this._capacity = size
        this.length = 0
        this._deleted = 0
        this._hashTable = []

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value)
            }
        }
    }

    static _hashString(string) {
        let hash = 5381
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i)
            hash = hash & hash
        }
        return hash >>> 0
    }
};

module.exports = SepHashMap

function flatDeep(arr, d = 1) {
    return d > 0 ?
        arr.reduce((acc, val) => acc.concat(Array.isArray(val) ?
            flatDeep(val, d - 1) : val), []) :
        arr.slice();
};