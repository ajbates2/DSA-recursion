class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function display(stack) {
    let current = stack.top
    let arr = []
    while (current !== null) {
        arr.push({
            data: current.data,
            next: (current.next === null) ? null : current.next.data
        })
        current = current.next
    }
    // 0 index of arr is the top
    return arr
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true
    }
    // false means it is NOT empty
    else return false
}

function peek(stack) {
    return stack.top.data
}

function popTo(stack, data) {
    if (stack.top.data === data) {
        stack.pop()
    }
    // pops top of stack until it equals desired Node
    while (stack.top.next.data === data) {
        stack.pop()
    }
    // removes actual desired Node
    stack.pop()
    return display(stack)
}

const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

//console.log(peek(starTrek))
//console.log(isEmpty(starTrek))
//console.log(display(starTrek))

//console.log(popTo(starTrek, 'McCoy'))
//console.log(starTrek.length())

function is_palindrome(str) {
    // palindrome top is last letter of string
    const stack = new Stack()

    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for (let i = 0; i < [...str].length; i++) {
        stack.push(str[i])
    }

    let revStr = ''
    // adds removed stack.data to new string
    // since the last letter is the top of the stack
    // the string should output backwards
    // and pop doesn't actually 'delete' the data
    while (!isEmpty(stack)) {
        revStr = revStr + stack.pop()
    }

    if (str === revStr) {
        return true
    }
    else return false
}

//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));

function exprBalance(str) {
    let braces = '[]{}()'
    const stack = new Stack()

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let braceIndex = braces.indexOf(char)
        if (braceIndex % 2 === 0) {
            stack.push(braces[braceIndex + 1])
        }
        else {
            let last = stack.pop()
            if (last !== braces[braceIndex]) {
                return `missing '${braces[i]}'`
            }
        }
    }
    return 'balanced'
}


//console.log(exprBalance('([{])')) // missing closing '}'
//console.log(exprBalance('({}])')) // missing opening '['
//console.log(exprBalance('({}{}[])')) // balanced

function sortStack(inStack) {
    const tempStack = new Stack()

    while (!isEmpty(inStack)) {
        let last = inStack.pop()

        while (!isEmpty(tempStack) && peek(tempStack) < last) {
            inStack.push(tempStack.pop())
        }
        tempStack.push(last)
    }
    return display(tempStack)
}

const stackToSort = new Stack()

stackToSort.push(1)
stackToSort.push(-4)
stackToSort.push(3)
stackToSort.push(2)
stackToSort.push(55)

//console.log(display(stackToSort))
//console.log(sortStack(stackToSort))

function stackToQ(inStack) {
    const tempStack = new Stack()
    while (inStack.top !== null) {
        tempStack.push(inStack.pop())
    }
    return tempStack
}

const qStack = new Stack()

qStack.push('one')
qStack.push('two')
qStack.push('three')
qStack.push('four')

console.log(display(stackToQ(qStack)))