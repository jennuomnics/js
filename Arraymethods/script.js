// Array Method 

// Filter 

const filter_Array = [12, 43, 39, 27, 40, 30]

const filter_output = filter_Array.filter((each) => {
    return each > 30;
})

console.log(filter_Array, filter_output)

const filter_complex = [
    { name: 'Suryateja', age: 21 },
    { name: 'CharanTeja', age: 23 },
    { name: 'rajesh', age: 12 },
    { name: 'Sana', age: 15 }
]

console.log(filter_complex.filter((each) => {
    return each.age > 18;
}))


// Map 

const map_array = [12, 43, 39, 27, 40, 30]
const map_output = map_array.map((each) => {
    return each + 50;
})

console.log(map_array, map_output)

// This map has changed the Original Array

const map_complex = filter_complex.map((each) => {
    if (each.age < 18) {
        each.age = each.age + 10;
        return each;
    } else {
        return each;
    }
})

console.log(map_complex)


// Reduce 

console.log(filter_complex)

const reduce_complex = filter_complex.reduce((arr, each) => {
    if (each.age < 18) {
        arr++;
    }
    return arr;
}, 0)

console.log(reduce_complex)


// Sort

const sort_array = [90. - 2, 32, 22, 10]

sort_array.sort()

console.log(sort_array)
    // This is sort the original Array

const sort_complex = [
    { name: 'Suryateja', age: 21 },
    { name: 'CharanTeja', age: 23 },
    { name: 'rajesh', age: 12 },
    { name: 'Sana', age: 15 }
]

sort_complex.sort((a, b) => {
    return b.age - a.age
})

console.log(sort_complex)


// Find 

console.log(sort_array.find(each => {
    return each > 20;
}))

// chaining
const chaining = sort_complex.filter((each) => each.age > 20).map((each) => {
    return `my age is ${each.age}`
})

console.log(chaining)