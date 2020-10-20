const HashMap = require('./hashMap')
const SepHashMap = require('./sepHashMap')

HashMap.MAX_LOAD_RATIO = 0.5
HashMap.SIZE_RATIO = 3
SepHashMap.MAX_LOAD_RATIO = 0.5
SepHashMap.SIZE_RATIO = 3

function main() {
    const lotr = new SepHashMap()
    lotr.MAX_LOAD_RATIO = 0.5
    lotr.SIZE_RATIO = 3

    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Wizard', 'Gandalf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    lotr.set('Hobbit', 'Frodo')

    let getMaiar = lotr.get('Maiar') // The Necromancer
    let getHobbit = lotr.get('Hobbit') // Bilbo
    // I found it easier to get rid of the ._findSlot() method in .get()
    // now .get() will find the first key value pair based on ._stringHash()

    let lotrCap = lotr._capacity // 72
    // 'Hobbit' would take the last index in the smaller capacity hashTable
    // so you have to increase capacity so the hash's are actually indexed
    // when multiple 'Hobbit's were added

    let answers = {
        getMaiar,
        getHobbit,
        lotrCap,
        length: lotr.length
    }

    return answers
}

console.log(main())

const WhatDoesThisDo = function () {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1)); // returns value: 10
    // because you set the value of str1 to 10. and get will return the first hashed item
    console.log(map2.get(str3)); // returns value: 20
    // same reason
}

//console.log(WhatDoesThisDo())

function kModM(k, m) {
    let index = []
    if (k) {
        for (let i = 0; i < k.length; i++) {
            index.push(k[i] % m)
        }
    }
    return index
}

//console.log(kModM([5, 28, 19, 15, 20, 33, 12, 17, 10], 9))

function remDup(str) {
    let unique = ''
    for (let i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) === -1) {
            unique += str[i]
        }
    }
    return unique
}

//console.log(remDup('google'))

function isPalindrome(str) {
    let unique = ''
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            unique += str[i]
        }
    }
    return (unique.length > 1) ? false : true
}

//console.log(isPalindrome('acecarr')) // true
//console.log(isPalindrome('north')) // false

function groupAnagram(arr) {
    let hash = {}

    arr.forEach(str => {
        let letters = str.split('').sort()

        hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
    })

    const keys = Object.keys(hash);
    const values = keys.map(val => {
        return hash[val]
    })
    return values
}

//const anaArr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

//console.log(groupAnagram(anaArr))