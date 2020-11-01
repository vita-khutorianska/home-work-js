'use strict';
// const items = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const getItemsString = function (array) {
let result = '';
 
  for (let i = 0; i < array.length; i += 1) {
    result +=  `${i + 1} - ${array[i]}\n`;
  
  }
  return result;
};
  
  // getItemsString(items);
  // console.log(getItemsString(items));
 
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
*/