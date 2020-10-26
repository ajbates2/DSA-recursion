const BinarySearchTree = require('./binaryTree')
const Queue = require('./queue')

function indexOf(arr, val) {
    let ticks = 0
    for (let i = 0; i < arr.length; i++) {
        ticks++
        if (arr[i] == val) {
            return `found ${arr[i]} after ${ticks} loops`
        }
    }
    return `could not find ${val} after ${ticks} loops`
}

function binarySearch(arr, val, start, end, ticks = 1) {
    var start = start === undefined ? 0 : start
    var end = end === undefined ? arr.length : end

    if (start > end) {
        return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = arr[index]

    if (item == val) {
        ticks + 1
        return `found ${val} at index of ${index} after ${ticks} searches`
    }
    else if (item < val) {
        return binarySearch(arr, val, index + 1, end, ticks + 1)
    }
    else if (item > val) {
        return binarySearch(arr, val, start, index - 1, ticks + 1)
    }
    return `could not find ${val} after ${ticks} searches`
}

const list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

//console.log(binarySearch(list, 8)) // (0, 10), (0, 4), (3, 4), 3
//console.log(binarySearch(list, 16))
// (0, 10), (0, 4), (3, 4), (3), (0, 10), (6, 10), (6, 7), (7, 7), -1

const indexArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24,
    53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72,
    56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46,
    87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81,
    27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28,
    13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
    49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

//console.log(indexOf(indexArr, 1)) // found 1 after 74 loops
//console.log(indexOf(indexArr, 100)) // could not find 100 after 100 loops

const sortArr = indexArr.sort((a, b) => a - b)

//console.log(binarySearch(sortArr, 16)) // found 16 at index of 18 after 5 searches
//console.log(binarySearch(sortArr, 45)) // found 45 at index of 50 after 1 searches
//console.log(binarySearch(sortArr, 100)) // could not find 100 after 6 searches

function findBook(dewey, book) {
    // if ( binary search returns dewey section ) 
        // linear search through book titles in that section
    // else { return 'could not find book' }
}

// BST search

// 1) post-order: 14 19 15 27 25 90 79 91 89 35
// 2) pre-order: 8 6 5 7 10 9 11

function buildTree(val) {
    const bst = new BinarySearchTree()

    for (let i = 0; i < val.length; i++) {
        bst.insert(val[i], i)
    }

    return bst
}

const newArr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
const travTree = buildTree(newArr)

//console.dir(travTree, {depth: null})

//console.log(travTree.preOrder())
//console.log(travTree.inOrder())
//console.log(travTree.postOrder())

const StarTrek = new BinarySearchTree()

StarTrek.insert(5, 'Picard')
StarTrek.insert(3,'Riker')
StarTrek.insert(2 ,'Worf')
StarTrek.insert(4 ,'LaForge')
StarTrek.insert(1, 'security-officer')
StarTrek.insert(6, 'Data')
StarTrek.insert(8, 'Crusher')
StarTrek.insert(7, 'Selar')

//console.dir(StarTrek, {depth: null})

function rankOrder(tree) {
    const order = []
    const queue = [tree]
    while (queue.length) {
        const level = []
        for(let i = 0; i < queue.length; i++) { 
            const node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            level.push(node.value)
        }
        order.push(level)
    }
    return order.flat()
}

//console.log(rankOrder(StarTrek))

const WeeklyProfit = new BinarySearchTree()

WeeklyProfit.insert(128, 'mon')
WeeklyProfit.insert(97, 'tue')
WeeklyProfit.insert(121, 'wed')
WeeklyProfit.insert(123, 'thu')
WeeklyProfit.insert(98, 'fri')
WeeklyProfit.insert(97, 'sat')
WeeklyProfit.insert(105, 'sun')

//console.dir(WeeklyProfit, {depth: null})

function maxProfit(tree) {
    const min = tree._findMin()
    const max = min._findMax()
    return {
        buy: {
            price: min.key,
            day: min.value
        },
        sell: {
            price: max.key, 
            day: max.value
        }
    }
}

console.log(maxProfit(WeeklyProfit))