



//1. Console log the length of the array, console log the 3rd value of the array, console log the 5th vaulue of the array
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];


console.log (myAlphabet)
console.log (myAlphabet.length)

console.log (myAlphabet[2])
console.log (myAlphabet [5])

//------------------------------------------

// //2. Declare and initialize an array called Planets with 8 string values

let planets = ["mars", "earth", "venus", "pluto", "uranus", "jupiter", "plant x", "mercury"]

//------------------------------------------


// // 3. For each item in this array console.log the item

let furniture = ['Table', 'Chairs','Couch']

console.log (furniture[0])
console.log (furniture[1])
console.log (furniture [2])

console.table (furniture)

//--------------------------------------------

// //4. Loop over the array and if the value is "Math" console log "yuck"

let student1Courses = ['Math', 'English', 'Programming'];

for ( i = 0; i < student1Courses.length; i++) {
    console.log (i)
}

for ( i = 0; i < student1Courses.length; i++) {
    if (student1Courses[0]) {
        console.log ("Yuck")
    }
}

//--------------------------------------------


// //5.  Create an array of 4 fruits, then add 2 fruits (kiwi, grapes) to the end of the array using the method learned. Display the result in the console.

 let fruits = ["apple", "orange", "pear", "banana"]

 console.log (fruits)

fruits.push ("kiwi", "grapes")
console.log (fruits)


// //6. Remove the last value (grapes) from the array in #5. Display the result in the console.

fruits.pop ()
console.log (fruits)


// //7. Remove the first fruit (apple) from the array in #5. Display the result in the console.

fruits.splice (0, 1)
console.log (fruits)


// //8.  Add a fruit (dragonfruit) to the beginning of the array in #5. Display the result in the console.

fruits.unshift ("dragonfruit")
console.log (fruits)


// //9.   Change the fruit 'orange' to be the fruit 'persimmon', and display the result in the console.


let fruit = ["apple", "orange", "pear", "banana"]
fruit.unshift ("dragonfruit")
console.log (fruit)

fruit [2] = "persimmon"

console.log (fruit)

// //10.  In our console, display the length of our fruit array from #9.  The output should read "My array has____items."

console.log (`My array has ${fruits.length} items`) 
console.table (fruit)


// Bonus:  Add a fruit (pomegranate) in the second location of your array. Display the result in the 

// fruit.unshift ("pomergranate")
// console.log (fruit)

fruit.splice (1, 1, "pomergranate")
console.log (fruit)
// console. (Display should now read dragonfruit, pomegranate, persimmon, pear, banana, kiwi.)