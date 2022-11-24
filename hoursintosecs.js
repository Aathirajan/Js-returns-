// Write a function that takes a parameter (hours) and converts
// it to seconds

function howManySeconds(hours) {
    let seconds = Number(hours) * 60 * 60;
    return seconds

    // Your function should return an integer
    // of how many seconds are in the hour
}
let hour = prompt('Enter How Many Hour?')
console.log(howManySeconds(hour))
  //Topics: Variables,functions, Math
