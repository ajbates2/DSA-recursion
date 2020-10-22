const Queue = require('./queue')

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        if (this.key == null) {
            this.root = true
            this.key = key
            this.value = value
        }

        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            else {
                this.left.insert(key, value)
            }
        }

        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value
        }

        else if (key < this.key && this.left) {
            return this.left.find(key)
        }
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        else {
            throw new Error('Key Error')
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            else if (this.left) {
                this._replaceWith(this.left)
            }
            else if (this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error')
        }
    }

    dfs(values = []) {
        if (this.left) {
            values = this.left.dfs(values)
        }
        values.push(this.value)

        if (this.right) {
            values = this.right.dfs(values)
        }
        return values
    }

    bfs(tree, values = []) {
        const queue = new Queue()
        const node = tree.root
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue()
            values.push(node.value)

            if (node.left) {
                queue.enqueue(node.left)
            }

            if (node.right) {
                queue.enqueue(node.right)
            }
        }
        return values
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node
            }
            else if (this == this.parent.right) {
                this.parent.right = node
            }

            if (node) {
                node.parent = this.parent
            }
        }
        else {
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this
        }
        return this.left._findMin()
    }
}

// i believe this prints the size of the BST
function tree(t) {
    if (!t) {
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
// finds sum of all values

function treeHeight(tree) {
    if (!tree) {
        return 0
    }
    else {
        const left = treeHeight(tree.left)
        const right = treeHeight(tree.right)
        return left > right ? left + 1 : right + 1
    }
}

function buildTree(val) {
    const bst = new BinarySearchTree()

    for (let i = 0; i < val.length; i++) {
        bst.insert(val[i], i)
    }

    return bst
}

function isBst(tree, min = null, max = null) {
    if (!tree) {
        return true
    }
    if (max !== null && tree.key >= max) {
        return false
    }
    if (min !== null && tree.key <= min) {
        return false
    }
    const left = isBst(tree.left, min, tree.key)
    const right = isBst(tree.right, tree.key, max)

    return left && right
}

const numArr = [3, 1, 4, 6, 9, 2, 5, 7]
const numTree = buildTree(numArr)
const easyQuestion = buildTree('EASYQUESTION')

//console.dir(numTree, { depth: null })
//console.log(treeHeight(easyQuestion))
//console.log(isBst(numTree)) // true

const falseTree = {
    key: 3,
    left: {
        key: 2,
        left: {
            key: 3,
            left: null,
            right: null
        },
        right: {
            key: 1,
            left: null,
            right: null
        }
    },
    right: {
        key: 5,
        right: {
            key: 6,
            right: {
                key: 7,
                right: null,
                left: null
            },
            left: {
                key: 4,
                right: null,
                left: null
            }
        }
    }
}

//console.log(isBst(falseTree)) // false

function isTreeBalanced(tree) {
    if (!tree) {
        return 'empty tree'
    }
    const left = treeHeight(tree.left)
    const right = treeHeight(tree.right)
    console.log(left, right)

    return (left > right || right > left) ? false : true
}

const balance = buildTree([5, 3, 7, 4, 2, 6, 8])
//console.dir(balance, { depth: null })

//console.log(isTreeBalanced(balance)) // true
//console.log(isTreeBalanced(numTree)) // false

function sameBst(arr1, arr2) {
    if (arr1[0] !== arr2[0] && arr1.length !== arr2.length) {
        return false
    }
    let l1 = []
    let l2 = []
    let r1 = []
    let r2 = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < arr1[0]) {
            l1.push(arr1[i])
        }
        if (arr2[i] < arr2[0]) {
            l2.push(arr2[i])
        }
        if (arr1[i] > arr1[0]) {
            r1.push(arr1[i])
        }
        if (arr2[i] > arr2[0]) {
            r2.push(arr2[i])
        }
    }
    return (l1[0] === l2[0] && r1[0] && r2[0]) ?
        true : false
}

const arr1 = [3, 5, 4, 6, 1, 0, 2]
const arr2 = [3, 1, 5, 2, 4, 6, 0]

console.log(sameBst(arr1, arr2)) // true