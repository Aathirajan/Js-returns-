// Array methods


//  let array = [1,2,3,4,5,6,7,8,9,10]

//  join
//  console.log(array.join(' '))

// At 

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.at(-3))

// concat

// let array = [1,2,3,4,5,6,7,8,9,10]
// let array2 = [11,12,13,14,15]
// let array3 = array.concat(array2)
// console.log(array3)

//spread parameter 
// It concats the array that we provide with ... in prefix

// Entries

// let array = [1,2,3,4,5,6,7,8,9,10]
// let x = array.entries();
// console.log(x.next().value[1]+5)
// console.log(x.next().value)
// console.log(x.next().value)

// EVERY 
// It returns a boolean, its checks every elements
// in an array and returns the boolean. 
// its an higher order functiion which takes another 
// function

// let array = [1,2,3,4,5,6,7,8,9,10]
// let isItGreater = array.every( (a)=> a<8 )
// console.log(isItGreater)

//Find 
// it finds the first match that we gave in the condition
// and it also a higher order function

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.find((a)=>a>9 ))

// Filter 
// the same higher order functions which returns 
// the rest elements that we gave in the condition 
// understand filter is an filter 
// It returns an array
// In simple terms filter copies the elements one by 
// one and loops it and find its elements which are  satisfies the conditions
// and returns an array

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.filter ( (a)=>a<10))

//FIND INDEX 
// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.findIndex((a)=>a==5))

 // INDEX OFF
//  let array = [1,2,3,4,5,6,7,8,9,10]
//  console.log(array.indexOf(8))

//Keys
// its an iterator
// let array = [1,2,3,4,5,6,7,8,9,10]
// let x =array.keys(5)
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);

// Last IndexOff

// let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(array.lastIndexOf(5))

//push
// let array = [1,2,3,4,5,6,7,8,9,10]
// array.push(18)
// console.log(array);

// pop 
// let array=[1,2,3,4,5,6,7,8,9,10,18]
// array.pop()
// console.log(array)

//Reverse
// let array=[1,2,3,4,5,6,7,8,9,10,18]
// console.log(array.reverse())\

//SHIFT(removes the first element in the array)
// let array=[1,2,3,4,5,6,7,8,9,10,18]
// array.shift()
// console.log(array)

//Slice (copies existing array , gives new array )
// let array=[1,2,3,4,5,6,7,8,9,10,18]
// // console.log(array.slice(9))
// // console.log(array)\
// console.log(array.slice(4,7))

// Some (its similar to every and it returns a boolean)

// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.some( (a)=> a>12))

// Splice (makes changes in original array 
// keeps what we give and removes everything in original array)
// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.splice(4,7))

// To string

// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.toString(4,7))


// OBJECT


// 
















