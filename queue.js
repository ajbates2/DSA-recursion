class _Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }

        this.last = node
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }
        return node.data
    }
}

module.exports = Queue

function display(q) {
    let current = q.first
    let arr = []
    while (current !== null) {
        arr.push({
            prev: (current.prev === null) ? null : current.prev.data,
            data: current.data,
            next: (current.next === null) ? null : current.next.data
        })
        current = current.next
    }
    // 0 index of arr is first
    return arr
}

function isEmpty(q) {
    if (q.first === null && q.last === null) {
        return true
    }
    // false means it is NOT empty
    else return false
}

function peek(q) {
    return q.first.data
}

function dqTo(q, data) {
    if (q.first.data === data) {
        q.dequeue()
    }
    // dequeues until it equals desired Node
    while (q.first.next.data === data) {
        q.dequeue()
    }
    // removes actual desired Node
    q.dequeue()
    return display(q)
}

const starTrekQ = new Queue()

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

//console.log(display(starTrekQ))
//console.log(isEmpty(starTrekQ))
//console.log(peek(starTrekQ))
//console.log(dqTo(starTrekQ, 'Spock'))

class _2Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoubleQueue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _2Node(data)

        if (this.first === null) {
            this.first = node
        }

        if (this.first) {
            this.first.prev = null
        }

        if (this.last) {
            this.last.next = node
            node.prev = null
        }

        node.prev = this.last
        this.last = node
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        node.prev = null

        if (node === this.last) {
            this.last = null
        }
        return node.data
    }
}

const starTrek = new DoubleQueue()

starTrek.enqueue('Kirk')
starTrek.enqueue('Spock')
starTrek.enqueue('Uhura')
starTrek.enqueue('Sulu')
starTrek.enqueue('Checkov')
starTrek.dequeue()

//console.log(display(starTrek))
//console.log(peek(starTrek))

function squareDance(q) {
    let femQ = new DoubleQueue()
    let maleQ = new DoubleQueue()
    let partners = []
    let current = q.first
    while (current !== null) {
        let first = q.dequeue()
        if (current.data.sex === 'F') {
            femQ.enqueue(first)
        }
        if (current.data.sex === 'M') {
            maleQ.enqueue(first)
        }
        current = current.next
    }
    let currentMale = maleQ.first
    let currentFem = femQ.first
    while (currentFem !== null || currentMale !== null) {
        let firstMale = maleQ.dequeue()
        let firstFem = femQ.dequeue()
        if (currentFem && currentMale) {
            partners.push({ F: firstFem.name, M: firstMale.name })
        }
        else if (currentFem === null) {
            q.enqueue(firstMale.name)
        }
        else if (currentMale === null) {
            q.enqueue(firstFem.name)
        }
        currentMale = (currentMale) ? currentMale.next : null
        currentFem = (currentFem) ? currentFem.next : null
    }
    return {
        dancers: partners,
        spares: display(q)
    }
}

const dancers = new DoubleQueue()

dancers.enqueue({ sex: 'F', name: 'Jane' })
dancers.enqueue({ sex: 'M', name: 'Frank' })
dancers.enqueue({ sex: 'M', name: 'John' })
dancers.enqueue({ sex: 'M', name: 'Sherlock' })
dancers.enqueue({ sex: 'F', name: 'Madonna' })
dancers.enqueue({ sex: 'M', name: 'David' })
dancers.enqueue({ sex: 'M', name: 'Christopher' })
dancers.enqueue({ sex: 'F', name: 'Beyonce' })

//console.log(squareDance(dancers))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function teller(q) {
    let current = q.first
    while (current !== null) {
        if (getRandomInt(1, 4) === 1) {
            current.data.paperwork = false
            q.enqueue(q.dequeue())
        }
        if (current.data.paperwork) {
            q.dequeue()
        }
        current = current.next
    }
    return display(q)
}

const line = new DoubleQueue()

line.enqueue({ name: 'John', paperwork: true })
line.enqueue({ name: 'Jeff', paperwork: true })
line.enqueue({ name: 'Jeb', paperwork: true })
line.enqueue({ name: 'Dave', paperwork: true })
line.enqueue({ name: 'Lauren', paperwork: true })
line.enqueue({ name: 'Diane', paperwork: true })
line.enqueue({ name: 'Heike', paperwork: true })
line.enqueue({ name: 'Mary', paperwork: true })
line.enqueue({ name: 'Erika', paperwork: true })

console.log(teller(line))