// spread operator

const getSum = (...nums) => {
    let sum = 0;
    nums.map((each) => {
        sum += each
    })
    return sum;
}

console.log(getSum(10, 20, 30))


const person = { name: 'suryateja', age: 21 }

const personClone = {...person, role: 'softwareDeveloper' }

console.log(person, personClone)

// sets 
const names = ['sunny', 'bunny', 'sunny', 'kunny', 'chunny']

console.log(names)

const unique = new Set([...names, 'ram'])

console.log(unique)

const set_op = new Set()

set_op.add(20)

set_op.add(30).add(90)

set_op.add(40)

set_op.delete(20)

console.log(set_op)

console.log(set_op.has(40))
console.log(set_op.size, "length")


// Symbols 
const symbol_one = Symbol('Hello')
const symbol_two = Symbol('Hello')

console.log(symbol_one, symbol_two)

console.log(symbol_one === symbol_two)
    // this is always false