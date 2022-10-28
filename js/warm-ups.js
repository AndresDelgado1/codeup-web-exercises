function areaTriangle(b, h){

    console.log('The area of the triangle is ' + (b * h) / 2 )
}
//areaTriangle(6, 4)



function countUp(){
    for(i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log(i + ' Fizz')
    }
    }
}
//countUp()




//Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
//example input: [1,2,3,4,5] expected output: [2,4]
function evenNumbers() {
    for (let i = 1; i <= 10; i += 2) {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log(array[i]);
    }
}
//evenNumbers()





//Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and //value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
let cities = [{city: 'Tokyo', country: 'Japan'}, { city: 'Bangkok', country: 'Thailand'}]
let where = 'Asia'
function x (array, string){
    return cities[0].push('continent:')

}



//re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }
function countDown() {
    for (let i = 20; i >= 0; i--) {
        console.log(i)
    }
}



//Add ‘strawberry’ to the beginning, middle, and end of the array. var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
fruits.splice(3, 0, 'strawberry');
fruits.unshift('strawberry');
fruits.push('strawberry');
console.log(fruits);




// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇test 1
// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false
function timesFour(input){
    if(isNaN(input)){
        return false;
    } else if(typeof input === 'number' || parseInt(input)){
        return Number(input) * 4;
    } else {
        return false
    }
}

//console.log(timesFour(true));;



// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false
function convertDaysToHours(days){
    if(isNaN(days)){
        return false
    } else if(typeof days == 'number' || parseInt(days)) {
        return days * 24;
    } else {
        return false
    }
}

//console.log(convertDaysToHours('5'));



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)               // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)           // “$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false
function calculateTax(totalPaid, taxPercent){
    if(isNaN(totalPaid) || isNaN(taxPercent)){
        return false
    } else if((typeof totalPaid === 'number' && taxPercent === 'number') || (parseInt(totalPaid) && parseInt(taxPercent))) {
        let tax = taxPercent / 100;
        return (totalPaid + (totalPaid * tax));
    } else {
        return false
    }
}

//console.log(calculateTax(25, 8));
// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆



// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇test 2

// * Online Shopping
// * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// *
// * Examples
// *
// * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
// * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
// * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
// *
// * Notes
// * Ignore tax or additional fees when calculating the total order cost.
// */




/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */





/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */






/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
