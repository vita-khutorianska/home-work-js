<<<<<<< HEAD

const findBestEmployee = function (employees) {
    'use strict';
    const name = "";
    let maxValue = 0;
  // Write code under this line
     let entries = Object.entries(employees);
  for (const entry of entries) {
    console.log(entry);
  }
 
   
=======
const findBestEmployee = function (employees) {

    'use strict';
    let name = "";
    let maxValue = 0;
    // Write code under this line
    let entries = Object.entries(employees);
    for (const entry of entries) {
        console.log(entry);
        
        if (maxValue < entry[1]) {
            maxValue = entry[1]; 
            name = entry[0];
        }
  
    }
    return name;
>>>>>>> 0cc070db5804e5668ae09afb18a6d77cba054874
};

// Объекты и ожидаемый результат
const developers = {
<<<<<<< HEAD
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
=======
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
>>>>>>> 0cc070db5804e5668ae09afb18a6d77cba054874
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
<<<<<<< HEAD
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
//console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
//console.log(findBestEmployee(sellers)); 
=======
    poly: 12,
    mango: 17,
    ajax: 4,
};
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}
console.log(findBestEmployee(sellers));
>>>>>>> 0cc070db5804e5668ae09afb18a6d77cba054874
// 'lux'  