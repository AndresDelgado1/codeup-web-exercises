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




