let food = Number(prompt('How much is the price?'))

let tipPercentage = Number(prompt('tip percentage%?'))

let tip = food * tipPercentage / 100;
let totcost = food + tip;

console.log('Total cost to pay:', totcost)
