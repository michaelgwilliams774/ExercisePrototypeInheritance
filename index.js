// Exercise - extend the functionality of a built in object

//# 1
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1
}
console.log(new Date('1900-10-10').lastYear())

// #Bonus
// Modify.map() to print '*' at the end of each item

//console.log([1,2,3].map())
// 1*, 2*, 3*

Array.prototype.map = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + '*')
  }
  return arr
}

console.log([1,2,3].map())

// How would you be able to create your own .bind() method using "call" or "apply"
// Please find the issue on the below code and fix it

Function.prototype.bind = function(arguments) {
  console.log('updated bind function')
  this.call(arguments)
}

const wizard = {
  health: 30,
  heal(num1, num2) {
    return this.health + num1 + num2;
  }
}

const archer = {
  health: 50
}

const archerHeal = wizard.heal.bind(archer, 30, 40)
console.log(archerHeal)