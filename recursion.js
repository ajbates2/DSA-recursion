// Counting Sheep

const sheepCount = sheep => {
    if (sheep === 0) {
        return
    }
    console.log(sheep + ': Another sheep jumps over the fence')
    sheepCount(sheep - 1)
    return 'All sheep jumped over the fence'
}

console.log(sheepCount(3))

// Power Calculator

const powerCalculator = (x, y) => {
    if (y < 0) {
        return 'exponent should be >= 0'
    }
    if (y === 1) {
        return x
    }
    return x * (powerCalculator(x, y - 1))
}

console.log(powerCalculator(10, 5))
console.log(powerCalculator(10, -2))

// Reverse String

const reverse = string => {
    if (string === '') {
        return ''
    }
    return reverse(string.substr(1)) + string.charAt(0)
}

console.log(reverse('hello'))

// nth Triangle

const nthTriangle = num => {
    if (num <= 1) {
        return num
    }
    return num + nthTriangle(num - 1)
}

console.log(nthTriangle(10))

// String Splitter

const split = (str, sep) => {
    let arr = []
    if (!sep || !sep.length) {
        return str
    }
    arr.push(str)
    return arr
}

console.log(split('02/20/2020', '/'))

// Fibonacci

const fibo = num => {
    if (num <= 2) {
        return 1
    }
    return fibo(num - 1) + fibo(num - 2)
}

console.log(fibo(7))

// Factorial

const factorial = num => {
    if (num < 0) {
        return -1
    }
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))

// maze

const navigate = (maze, x = 0, y = 0, path = []) => {
    if (maze[y][x] === 'e') {
        if (maze[x + 1] === 'e') {
            path.push('r')
        }
        if (maze[y + 1] === 'e') {
            path.push('d')
        }
        return path
    }

    console.log(y)
    if (maze[y][x + 1] === ' ') {
        path.push('r')
        navigate(maze, x + 1, y, path)
    }
    else {
        path.push('d')
        navigate(maze, x, y + 1, path)
    }
    return path
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(navigate(maze))

// Anagrams

const anagram = str => {
    const output = [];
    function traverse(str, perm = '') {
        const seen = new Set();
        if (!str) output.push(perm)
        for (let i = 0; i < str.length; i++) {
            if (!seen.has(str[i])) {
                seen.add(str[i]);
                traverse(str.slice(0, i) + str.slice(i + 1), perm + str[i]);
            }
        }
    }
    traverse(str)
    return output
}

console.log(anagram('east'))

// Organize

const organize = obj => {
    console.log(obj.length)
}

const peopleChart = {
    'Zuckerberg': {
        'Schroepfer': {
            'Bosworth': [
                'Steve', 'Kyle', 'Andra'
            ],
            'Zhao': [
                'Richie', 'Sofia', 'Jen'
            ]
        },
        'Schrage': {
            'VanDyck': [
                'Sabrina', 'Michelle', 'Josh'
            ],
            'Swain': [
                'Blanch', 'Tom', 'Joe'
            ]
        },
        'Sandberg': {
            'Goler': [
                'Eddie', 'Julie', 'Annie'
            ],
            'Hernandez': [
                'Rowi', 'Inga', 'Morgan'
            ],
            'Moissinac': [
                'Amy', 'Chuck', 'Vinni'
            ],
            'Kelley': [
                'Eric', 'Ana', 'Wes'
            ]
        }
    }
}

console.log(organize(peopleChart))

// binary

const getBinary = int => {
    if (int === 0) return '0'
    if (int === 1) return '1'
    let remainder = int % 2
    let quotient = (int - remainder) / 2
    if (remainder === 0) {
        return getBinary(quotient) + '0'
    }
    else {
        return getBinary(quotient) + '1'
    }
}

console.log(getBinary(5))