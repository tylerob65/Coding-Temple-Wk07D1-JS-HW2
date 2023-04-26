//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


const print_person_favorites = (person) => {
    // Deal with Pizza
    console.log(`Favorite Pizza: ${person.pizza.join(', ') }`)

    // Deal with tacos
    console.log(`Favorite Tacos: ${person.tacos}`)

    // Deal with burgers
    console.log(`Favorite Burgers: ${person.burgers}`)

    // Deal with Ice Cream
    console.log(`Favorite Ice Cream: ${person.ice_cream.join(', ')}`)
    
    // Deal with shakes
    console.log("Favorite Shakes by category...")
    for (let [key,value] of Object.entries(person.shakes[0])) {
        console.log(`----${key}: ${value}`)
    }
}

// print_person_favorites(person3)

// for (let [key,value] of Object.entries(person3)) {
//     console.log("________")
//     console.log("key: ",key)
//     console.log("value: ",value)
//     if (Array.isArray(value)) {
//         console.log("Was Array")
//     } else {
//         console.log("was not array")

//     }
// }




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person (name,age) {
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} year(s) old`)
    }
    this.addAge = (addedAge = 1) => {
        this.age += addedAge
    }
}

// The directions for the addAge function contradicts itself
const p1 = new Person("Tim",3)
p1.printInfo()
p1.addAge(3)
p1.printInfo()
p1.addAge()
p1.printInfo()









// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLenHelper(s) {
    return new Promise((resolve,reject) => {
        if (s.length >= 10) {
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
}

async function checkStringLen(s) {
    try {
        const response = await checkStringLenHelper(s)
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}


// Codewars question 1
// https://www.codewars.com/kata/55a70521798b14d4750000a4
// Make a function that will return a greeting statement that uses an input; your program should 
// return, "Hello, <name> how are you doing today?".
function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

// Codewrs question 2
// https://www.codewars.com/kata/5861d28f124b35723e00005e
// You were camping with your friends far away from home, but when it's time to go back, you realize that 
// your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs 
// on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump
};


// Codewars question 3
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list(depending on language).
function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n * x; i += x) {
        z.push(i)
    }

    return z;
}

// Codewars question 4
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Given an array of integers, remove the smallest value.Do not mutate the original array / list.
// If there are multiple elements with the same value, remove the one with a lower index.If you get 
// an empty array / list, return an empty array / list.

// Don't change the order of the elements that are left.
function removeSmallest(numbers) {
    if (numbers.length <= 1) {
        return []
    }
    const output = [];
    let the_min = numbers.reduce((acc, num) => Math.min(acc, num))
    let found_min = false
    for (let num of numbers) {
        if (!found_min && num == the_min) {
            found_min = true
        } else {
            output.push(num)
        }
    }

    return output;
}

// Codewars question 5
// https://www.codewars.com/kata/5aba780a6a176b029800041c
Task

// Given a Divisor and a Bound, Find the largest integer N, Such That,

//     Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// Notes

// The parameters(divisor, bound) passed to the function are only positive values.
//     It's guaranteed that a divisor is Found .

// Input >> Output Examples
// maxMultiple(2, 7) ==> return (6)
// (6) is divisible by(2), (6) is less than or equal to bound(7), and(6) is > 0 .

function maxMultiple(divisor, bound) {
    let n = bound
    while (n > 0) {
        if (n % divisor == 0) {
            return n
        }
        n--
    }
}


// Codewars question 6
// https://www.codewars.com/kata/56b7f2f3f18876033f000307
// In this Kata, your function receives an array of integers as input.Your task is to 
// determine whether the numbers are in ascending order.An array is said to be in ascending 
// order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e.arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending 
// order since all(zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed 
// he right integer in value.

function inAscOrder(arr) {
    if (arr.length <= 1) {
        return true
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false
        }
    }
    return true
}

