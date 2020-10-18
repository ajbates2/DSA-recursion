class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currNode.next
    }
    insertBefore(item, nextNode) {
        if (!this.head) {
            this.insertFirst(item)
        }
        let newNode = new _Node(item)
        let currNode = this.find(nextNode)
        let prevNode = this.head
        while (prevNode !== currNode) {
            newNode.next = currNode
            prevNode.next = newNode
            return
        }
    }
    insertAfter(item, prev) {
        if (!this.head) {
            this.insertFirst(item)
        }
        let newNode = new _Node(item)
        let prevNode = this.find(prev)
        newNode.next = prevNode.next
        prevNode.next = newNode
    }
    get(index) {
        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null
    }
    insertAt(item, index) {
        if (!this.head) {
            this.insertFirst(item)
        }
        if (index === 0) {
            this.insertFirst(item)
        }
        let prevNode = this.get(index - 1)
        let newNode = new _Node(item)
        newNode.next = prevNode.next
        prevNode.next = newNode
    }
}

const display = list => {
    let current = list.head;
    let size = 0
    let arr = []
    while (current !== null) {
        console.log(current)
        current = current.next
    }

}

const size = list => {
    let counter = 0
    let node = list.head
    while (node !== null) {
        if (!node) {
            return counter
        }
        counter++
        node = node.next
    }
    return counter
}

const isEmpty = list => {
    if (list.head === null) {
        return true
    }
    return false
}

const main = () => {
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')

    display(SLL)
    size(SLL)
    isEmpty(SLL)

    return {
        list: display(SLL),
        size: size(SLL),
        isEmpty: isEmpty(SLL)
    }
}

console.log(main())
